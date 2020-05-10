import Button from 'components/atoms/Button/Button'
import Card from 'components/atoms/Card/Card'
import IconWithText from 'components/atoms/IconWithText/IconWithText'
import Progress from 'components/modules/Quizs/Progress'
import { Link } from 'gatsby'
import target from 'assets/images/target.svg'
import React from 'react'
import { TTrackPageCourseFragment } from '../../../graphqlTypes'
import { TFunction } from 'i18next'

type Props = {
  currentPath: string
  t: TFunction
} & TTrackPageCourseFragment

const CourseCard = ({
  chapters,

  currentPath,
  level = 1,
  quiz_difficulties: { quiz_difficulties },

  slug,
  translations,
  t,
  topic,
}: Props): JSX.Element => {
  // TODO calculate next chapter with progress
  const nextCoursePath = `${currentPath}/${slug}/${chapters[0] && chapters[0].slug}/`
  // const finishedChapters = chapters.reduce((sum, {id: chapterId}): number => {
  //   if (chaptersState[chapterId]) {
  //     sum += 1 // eslint-disable-line no-param-reassign
  //   }
  //   return sum
  // }, 0)
  // const finishedQuizs: number = (quiz_difficulties as number[]).reduce<number>(
  //   (acc, difficulty) => {
  //     if (
  //       quizsState &&
  //       quizsState[t.locale] &&
  //       quizsState[t.locale][difficulty] &&
  //       quizsState[t.locale][difficulty].passed
  //     ) {
  //       return acc + 1
  //     }
  //     return acc
  //   },
  //   0,
  // )
  // const percent =
  //   (100 * (finishedChapters + finishedQuizs)) /
  //   (quiz_difficulties.length + chapters.length)
  return (
    <Card
      className="mt4 ph4 w-60-ns flex flex-column"
      key={slug}
      // to={`${currentPath}/${slug}`}
    >
      <div className="self-end pv3 flex items-center">
        <IconWithText className="ph2" icon={target}>
          {`${t('course')} ${t(`level${level}`)}`}
        </IconWithText>
        <div className="ph4 pv2 br-pill white f7" style={{ backgroundColor: topic.color }}>
          {topic.translations[0].title}
        </div>
      </div>
      <div className=" pt2 pb4 bt b--black-20">
        <h2 className="f5">{translations[0].title}</h2>
        {translations[0].description && (
          <div
            className="w-90-m w-70-l f6"
            dangerouslySetInnerHTML={{
              __html: translations[0].description,
            }}
          />
        )}
        <div className="flex justify-between items-center">
          <Link className="no-underline" to={nextCoursePath}>
            <Button className="mt3" outlined pill>
              {t('startCourse')}
            </Button>
          </Link>
          {/* {percent !== 0 && (
            <Progress className="mt3 w-60" progress={percent} />
          )} */}
        </div>
      </div>
    </Card>
  )
}
export default CourseCard
