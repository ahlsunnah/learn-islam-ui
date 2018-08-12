// @flow
import Button from 'components/Button'
import Card from 'components/Card'
import IconWithText from 'components/IconWithText'
import Link from 'gatsby-link'
import target from 'images/target.svg'
import * as React from 'react'

type Props = {
  chapters: Array<{
    slug: string,
  }>,
  currentPath: string,
  level: number,
  slug: string,
  strings: Array<{
    title: string,
    description: string,
  }>,
  t: {
    course: string,
    startCourse: string,
  },
  topic: {
    color: string,
    strings: Array<{
      title: string,
    }>,
  },
}
const CourseCard = ({
  chapters,
  currentPath,
  level = 1,
  slug,
  strings,
  t,
  topic,
}: Props) => {
  // TODO calculate next chapter with progress
  const nextCoursePath = `${currentPath}/${slug}/${chapters[0] &&
    chapters[0].slug}`
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
        <Link className="no-underline" to={nextCoursePath}>
          <Button className="mt3" secondary stroked>
            {t.startCourse}
          </Button>
        </Link>
      </div>
    </Card>
  )
}
export default CourseCard
