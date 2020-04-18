import { resolve } from 'path';
import slash from 'slash';
import { GatsbyCreatePages } from '../types/gatsbyNode';
import createLocalesPaths from './createLocalesPaths';
import { Locale } from '../types/index';
import nextStepCalculatorGenerator from './nextStepCalculatorGenerator';
import { TMadrassahPageQueryQuery } from '../graphqlTypes';

const createMadrassahPages: GatsbyCreatePages = async ({
  graphql,
  actions: { createPage, createRedirect },
}): Promise<void> => {
  const locales: Locale[] = ['ar', 'fr'];
  const { localePaths, otherLocalesPaths } = createLocalesPaths(locales);

  // const MainLayout = resolve(`./src/templates/MainLayout.jsx`)
  const homeTemplate = resolve(`./src/templates/Home.tsx`);
  const tracksTemplate = resolve(`./src/templates/Tracks.tsx`);
  const aboutUsTemplate = resolve(`./src/templates/AboutUs.tsx`);
  const trackTemplate = resolve(`./src/templates/Track.tsx`);
  const chapterTemplate = resolve(`./src/templates/Chapter.tsx`);
  const quizsTemplate = resolve(`./src/templates/Quizs.tsx`);

  // home pages
  console.log('Creating home pages');
  locales.forEach((locale): void => {
    createPage({
      path: localePaths[locale],
      component: slash(homeTemplate),
    });
  });

  // tracks pages
  console.log('Creating tracks pages');
  locales.forEach((locale): void => {
    createPage({
      path: `${localePaths[locale]}masar/`,
      component: slash(tracksTemplate),
      context: {
        locale,
        localeEnum: locale,
        localePaths,
        otherLanguagePath: otherLocalesPaths && `${otherLocalesPaths[locale]}masar/`,
      },
    });
  });

  // // about us pages
  console.log('Creating about us pages');
  locales.forEach((locale): void => {
    createPage({
      path: `${localePaths[locale]}nahnu/`,
      component: slash(aboutUsTemplate),
      context: {
        locale,
        localeEnum: locale,
        localePaths,
        otherLanguagePath: otherLocalesPaths && `${otherLocalesPaths[locale]}nahnu/`,
      },
    });
  });

  console.log('fetching data');
  const result = await graphql<TMadrassahPageQueryQuery>(
    `
      query MadrassahPageQuery {
        api {
          tracks {
            id
            slug
            translations {
              id
              locale_code
              title
            }
            courses {
              id
              slug
              quiz_difficulties {
                quiz_difficulties
              }
              translations {
                id
                locale_code
                title
              }
              chapters {
                id
                slug
                translations {
                  id
                  locale_code
                  title
                }
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    result.errors.forEach((error): void => console.error(error.message));
    throw new Error('Error while executing a query in createMadrassahPages');
  }
  const {
    api: { tracks },
  } = result.data;
  const nextStepCalculatorWithTracks = nextStepCalculatorGenerator(tracks);

  tracks.forEach((track, trackIndex): void => {
    const { courses, id: trackId, slug: trackSlug, translations } = track;
    const nextStepCalculatorWithTrack = nextStepCalculatorWithTracks(trackIndex);
    if (courses && courses.length) {
      // create track pages
      translations.forEach(({ locale_code }): void => {
        console.log(`creating TRACK page for slug (${trackSlug}) and locale (${locale_code}) `);
        createPage({
          path: `${localePaths[locale_code]}${trackSlug}/`,
          component: slash(trackTemplate),
          context: {
            id: trackId,
            locale: locale_code,
            localeEnum: locale_code,
            localePaths,
            slug: trackSlug,
          },
        });
      });

      courses.forEach((course, courseIndex): void => {
        const nextStepCalculatorWithCourse = nextStepCalculatorWithTrack(courseIndex);
        const {
          chapters,
          id: courseId,
          quiz_difficulties: { quiz_difficulties },
          slug: courseSlug,
        } = course;

        // create chapter pages
        chapters.forEach((chapter, chapterIndex): void => {
          const { id: chapterId, slug: chapterSlug, translations: chapterTranslations } = chapter;
          chapterTranslations.forEach(({ locale_code }): void => {
            console.log(`creating CHAPTER page for slug (${chapterSlug}) and locale (${locale_code}) `);
            const next = nextStepCalculatorWithCourse({
              chapterIndex,
              locale: locale_code,
              localePath: localePaths[locale_code],
            });

            const chapterPath = `${localePaths[locale_code]}${trackSlug}/${courseSlug}/${chapterSlug}/`;
            createPage({
              path: chapterPath,
              component: slash(chapterTemplate),
              context: {
                locale: locale_code,
                localeEnum: locale_code,
                localePaths,
                next,
                slug: chapterSlug,
                id: chapterId,
              },
            });

            if (chapterIndex === 0) {
              // course link redirects to first chapter
              createRedirect({
                fromPath: `${localePaths[locale_code]}${trackSlug}/${courseSlug}/`,
                isPermanent: true,
                redirectInBrowser: true,
                toPath: chapterPath,
              });
            }
          });
        });

        // Create quizs:
        if (quiz_difficulties && quiz_difficulties.length) {
          locales.forEach((locale): void => {
            (quiz_difficulties as number[]).forEach((difficulty, quizDifficultyIndex): void => {
              console.log(
                `Create QUIZS page for course ${courseSlug} and locale ${locale} and difficulty ${difficulty}`
              );
              const next = nextStepCalculatorWithCourse({
                locale,
                localePath: localePaths[locale],
                quizDifficultyIndex,
              });

              createPage({
                path: `${localePaths[locale]}${trackSlug}/${courseSlug}/ikhtibar-${difficulty}/`,
                title: `difficulty${quiz_difficulties[difficulty]}`,
                component: slash(quizsTemplate),
                context: {
                  difficulty,
                  locale: locale,
                  localeEnum: locale,
                  localePaths,
                  next,
                  slug: courseSlug,
                  id: courseId,
                },
              });
            });
          });
        }
      });
    }
  });
};

export default createMadrassahPages;
