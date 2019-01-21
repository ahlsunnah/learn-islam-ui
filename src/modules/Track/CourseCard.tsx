import Button from 'components/Button'
import Card from 'components/Card'
import IconWithText from 'components/IconWithText'
import Progress from 'modules/Quizs/Progress'
import {Link} from 'gatsby'
import target from 'images/target.svg'
import * as React from 'react'

interface Props {
  chapters: Array<{
    slug: string
  }>
  chaptersState: Object
  currentPath: string
  level: number
  slug: string
  strings: Array<{
    title: string
    description: string
  }>
  quizs: Array<{difficulty: Boolean}>
  quizsState: Object
  t: {
    course: string
    locale: string
    startCourse: string
  }
  topic: {
    color: string
    strings: Array<{
      title: string
    }>
  }
}
const CourseCard = ({
  chapters,
  chaptersState,
  currentPath,
  id,
  level = 1,
  quizs,
  quizsState,
  slug,
  strings,
  t,
  topic,
}: Props) => {
  // TODO calculate next chapter with progress
  const nextCoursePath = `${currentPath}/${slug}/${chapters[0] &&
    chapters[0].slug}/`
  const finishedChapters = chapters.reduce((sum, {id: chapterId}) => {
    if (chaptersState[chapterId]) {
      sum += 1 // eslint-disable-line no-param-reassign
    }
    return sum
  }, 0)
  const difficulties = quizs.reduce((acc, {difficulty}) => {
    if (!acc.includes(difficulty)) acc.push(difficulty)
    return acc
  }, [])
  const finishedQuizs = difficulties.reduce((acc, difficulty) => {
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
    (difficulties.length + chapters.length)
  return (
    <Card
      className="mt4 ph4 w-60-ns flex flex-column"
      key={slug}
      to={`${currentPath}/${slug}`}
    >
      <div className="self-end pv3 flex items-center">
        <IconWithText className="ph2" icon={target}>
          {`${t.course} ${t[`level${level}`]}`}
        </IconWithText>
        <div
          className="ph4 pv2 br-pill white f7"
          style={{backgroundColor: topic.color}}
        >
          {topic.strings[0].title}
        </div>
      </div>
      <div className=" pt2 pb4 bt b--black-20">
        <h2 className="f5">{strings[0].title}</h2>
        {strings[0].description && (
          <div
            className="w-90-m w-70-l f6"
            dangerouslySetInnerHTML={{
              __html: strings[0].description,
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
