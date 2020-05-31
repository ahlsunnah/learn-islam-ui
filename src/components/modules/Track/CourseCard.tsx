/** @jsx jsx */
import target from 'assets/images/target.svg'
import Button from 'components/atoms/Button/Button'
import Card from 'components/atoms/Card/Card'
import { useMemo } from 'react'
import { useLocation } from '@reach/router'
import IconWithText from 'components/atoms/IconWithText/IconWithText'
import { navigate } from 'gatsby'
import { TFunction } from 'i18next'
import { jsx } from 'theme-ui'
import { TTrackPageCourseFragment } from '../../../graphqlTypes'
import { TrackInnerPageCourseFragment } from '../../../hasuraTypes'

function isTrackInnerPageCourse(
  course: TTrackPageCourseFragment | TrackInnerPageCourseFragment
): course is TTrackPageCourseFragment {
  return 'slug' in course
}

type Props = {
  course: TTrackPageCourseFragment | TrackInnerPageCourseFragment
  currentPath: string
  t: TFunction
}

const CourseCard = ({ currentPath, course, t }: Props): JSX.Element => {
  // TODO calculate next chapter with progress
  const location = useLocation()

  const nextCoursePath = isTrackInnerPageCourse(course)
    ? `${currentPath}/${course.slug}/${course.chapters[0]?.slug}/`
    : `${currentPath}/${course.id}/${course.chapters[0]?.id}/`

  const appPath = useMemo(
    () => (location.pathname.indexOf('app') !== -1 ? `${location.pathname}/chapter/${course.id}` : false),
    [location, course]
  )

  const { level, topic, translations } = course

  return (
    <Card className="mt4 ph4 w-60-ns flex flex-column">
      <div className="self-end pv3 flex items-center">
        <IconWithText className="ph2" icon={target}>
          {`${t('course')} ${t(`level${level}`)}`}
        </IconWithText>
        <div className="ph4 pv2 br-pill white f7" sx={{ backgroundColor: topic.color }}>
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
          <div className="no-underline">
            <Button
              className="mt3"
              outlined
              pill
              onClick={() => navigate(appPath || nextCoursePath, { state: { coursePage: location } })}
            >
              {t('startCourse')}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CourseCard
