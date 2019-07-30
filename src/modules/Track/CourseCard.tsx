import Button from 'components/Button'
import Card from 'components/Card'
import IconWithText from 'components/IconWithText'
import Progress from 'modules/Quizs/Progress'
import {Link} from 'gatsby'
import target from 'images/target.svg'
import * as React from 'react'
import {ObjectOfStrings, ObjectOf} from 'interfaces'
import {ITrackTranslations, ITrackCourse} from '../../types/track'

interface Props {
  chaptersState: ObjectOf<any>
  currentPath: string
  quizsState: ObjectOf<ObjectOf<ObjectOf<{passed: boolean}>>>
  t: ITrackTranslations
}
const CourseCard = ({
  chapters,
  chaptersState,
  currentPath,
  level = 1,
  quizDifficulties,
  quizsState,
  slug,
  translations,
  t,
  topic,
}: Props & ITrackCourse): JSX.Element => {
  // TODO calculate next chapter with progress
  const nextCoursePath = `${currentPath}/${slug}/${chapters.edges[0] &&
    chapters.edges[0].node.slug}/`
  const finishedChapters = chapters.edges.reduce(
    (sum, {node: {id: chapterId}}): number => {
      if (chaptersState[chapterId]) {
        sum += 1 // eslint-disable-line no-param-reassign
      }
      return sum
    },
    0,
  )
  const finishedQuizs = quizDifficulties.reduce((acc, difficulty): number => {
    if (
      quizsState &&
      quizsState[t.locale] &&
      quizsState[t.locale][difficulty] &&
      quizsState[t.locale][difficulty].passed
    ) {
      return acc + 1
    }
    return acc
  }, 0)
  const percent =
    (100 * (finishedChapters + finishedQuizs)) /
    (quizDifficulties.length + chapters.edges.length)
  return (
    <Card
      className="mt4 ph4 w-60-ns flex flex-column"
      key={slug}
      // to={`${currentPath}/${slug}`}
    >
      <div className="self-end pv3 flex items-center">
        <IconWithText className="ph2" icon={target}>
          {`${t.course} ${t[`level${level}`]}`}
        </IconWithText>
        <div
          className="ph4 pv2 br-pill white f7"
          style={{backgroundColor: topic.color}}
        >
          {topic.translations.edges[0].node.title}
        </div>
      </div>
      <div className=" pt2 pb4 bt b--black-20">
        <h2 className="f5">{translations.edges[0].node.title}</h2>
        {translations.edges[0].node.description && (
          <div
            className="w-90-m w-70-l f6"
            dangerouslySetInnerHTML={{
              __html: translations.edges[0].node.description,
            }}
          />
        )}
        <div className="flex justify-between items-center">
          <Link className="no-underline" to={nextCoursePath}>
            <Button className="mt3" secondary stroked>
              {t.startCourse}
            </Button>
          </Link>
          {percent !== 0 && (
            <Progress className="mt3 w-60" progress={percent} />
          )}
        </div>
      </div>
    </Card>
  )
}
export default CourseCard
