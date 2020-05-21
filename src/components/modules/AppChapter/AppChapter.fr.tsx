/* eslint react/no-unused-prop-types: 0 */
import StepWrapper from 'components/molecules/StepWrapper'
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import NavigationButtons from '../Chapter/NavigationButtons'
import StepContent from '../Chapter/StepContent'
import '../Chapter/styles.scss'
import Tab from '../Chapter/Tab'
import VideoIframe from '../Chapter/VideoIframe'
import { IChapterProps } from '../../../types/chapter'
import useChapterState, { ChapterStates } from 'hooks/useChapterState'

interface IChapterExtra extends IChapterProps {
  path: string
}

const Chapter: React.FC<IChapterExtra> = ({ data, pageContext }) => {
  const {
    api: { chapter },
    otherLocaleTranslations,
    translations: t,
  } = data
  const [chapterState, setChapterState] = useChapterState(chapter.id)
  const toggleCompleteChapter = () => {
    if (chapterState == ChapterStates['not started']) {
      setChapterState(ChapterStates.completed)
    } else {
      setChapterState(ChapterStates['not started'])
    }
  }
  const [activeTab, setActiveTab] = useState<string>('AR')

  const toggleActiveTab: (event: React.MouseEvent) => void = (event) => {
    const el = event.currentTarget as HTMLButtonElement
    setActiveTab(el.name)
  }

  // TODO: memoize this:
  const arabicChapter = data.api.chapter.translations.find(({ locale_code }) => locale_code === 'ar')

  const arabicTranscription = arabicChapter && arabicChapter.transcription
  const chapterStrings = data.api.chapter.translations.find(({ locale_code }) => locale_code === pageContext.locale)

  if (!chapterStrings) {
    // TODO: Log to Sentry
    return <div>{"Error, we didn't find any strings for this chapter ..."}</div>
  }
  const otherLocalePath = `${data.otherLocaleTranslations.localePath}${data.api.chapter.course.track.slug}/${data.api.chapter.course.slug}/${data.api.chapter.slug}`

  const navigationButtons = (
    <NavigationButtons
      isChapterComplete={chapterState === ChapterStates.completed}
      next={pageContext.next}
      t={t}
      toggleCompleteChapter={toggleCompleteChapter}
    />
  )

  return (
    <StepWrapper
      currentCourseSlug={chapter.course.slug}
      track={chapter.course.track}
      t={t}
      otherLocaleName={otherLocaleTranslations.localeName}
      otherLocalePath={otherLocalePath}
      title={chapterStrings.title}
    >
      <Helmet title={chapterStrings.title} />
      <VideoIframe source={chapterStrings.video} title={chapterStrings.title} />
      <nav className="chapter-tabs w-100 flex justify-around items-center">
        <Tab
          type="AR"
          active={activeTab === 'AR'}
          handleClick={toggleActiveTab}
          svgPath="M8 4h32a4 4 0 0 1 4 4v36l-8-8H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm22.5 23.3l-3.2 2.1c-2.7 0-5.5 0-7.8-1.5-1.6-1-2.2-3-2-4.8 0-2 1-4 2.6-5.3.5-.7-1-.7-1.3-1.2a3.4 3.4 0 0 1-.8-4.2c.7-1.7 2.6-3 4.5-2.6A6 6 0 0 1 25 11c0 .4-1.2 0-1.6.2-1.5.2-3 .4-4.4 1.2-.9.6-.3 1.7.6 2 1 .7 2.1 1 3.3 1.1a22 22 0 0 1 5.3-2l-.5 2c-2.9 1.1-6 2.1-8.2 4.5-1.2 1.3-1.5 3.6-.2 5 1.3 1.5 3.4 1.7 5.3 2h5.8v.2z"
        >
          {t.tabTranscription}
        </Tab>
        {chapterStrings.vocabulary && (
          <Tab
            type="VOC"
            active={activeTab === 'VOC'}
            handleClick={toggleActiveTab}
            svgPath="M31.6 25.6h1.2l5.6 13.1h-2l-1.3-3.3h-5.8L28 38.7h-2l5.6-13zm2.9 8.3l-2.3-5.7-2.3 5.7h4.6zM15 12.1c.8-.2.3 1 .5 1.6.3 3.1.8 6.3.3 9.5-.1.5-1 .5-.7-.2 0-1 0-2-.2-3l-.8-6c.1-.7.6-1.3.9-2zm1.4-2c-1 .2-2 .6-2.8 1-1 0 .2-1-.2-1.4-.6-.6-.2-1.5.3-2.1.4-.6 1-1 1.8-1 .7.4.5 1.6-.2 1.8-.3-.2-1.4-.5-1 .2.6.5 1.5.5 2.2.3.8 0 .5 1.2-.1 1.2zM21.6 44a2.6 2.6 0 0 1-1.2-2c0-.5.2-.8.8-1.3l.8-.7v1c0 .6.2 1 .5 1.3.4.4.6.4 9.8.4 9.2 0 9.5 0 10-.4.3-.4.3-.7.3-9.9 0-9.2 0-9.4-.4-9.8-.4-.4-.7-.5-9.9-.5-9.2 0-9.4 0-9.8.5-.4.3-.5.6-.5 5l-.1 4.6-.8-.6c-.6-.5-.7-.7-.7-2.2l-.1-1.6h-1.6c-1.5-.1-1.6-.1-2.2-.9l-.6-.7L18 26l2.2-.1.1-2c0-1.2.2-2.1.4-2.4.5-.8 1-1 3.1-1.1l2-.1v-7c0-6.9 0-7.1-.4-7.5-.4-.4-.6-.4-9.8-.4-9.2 0-9.5 0-10 .4-.3.4-.3.7-.3 9.8 0 7.8 0 9.5.3 9.8.2.3.6.5 1.3.5l1 .2-.6.7c-.7.9-1.5 1-2.4.5-1.3-.8-1.3-.5-1.3-11.6S3.7 4.8 5 4c.5-.3 1.7-.4 10.7-.4s10.2 0 10.7.4c1.1.6 1 .6 1.2 8.7l.1 7.5 7.5.1c8.1.1 8 .1 8.7 1.3.3.4.4 1.7.4 10.6 0 11.1 0 10.9-1.3 11.6-.5.3-1.7.4-10.7.4s-10.2 0-10.7-.4zm-3-4.7V38H13.8L12.1 36l-1.9-1.8h8.3v-2.7l2.7 2.2 2.6 2.3-2.6 2.4-2.7 2.2zM10 31.3v-1.8H7.4l2.2-2.7 2.4-2.6 2.3 2.6 2.2 2.7h-2.7v3.7h-3.7z"
          >
            {t.tabVocabulary}
          </Tab>
        )}
        <Tab
          type="AUDIO"
          active={activeTab === 'AUDIO'}
          handleClick={toggleActiveTab}
          svgPath="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"
        >
          {t.tabAudio}
        </Tab>
        <Tab
          type="NEXT"
          active={activeTab === 'NEXT'}
          handleClick={toggleActiveTab}
          svgClassName={t.locale === 'ar' ? 'rotate-180' : undefined}
          svgPath="M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z"
        >
          {pageContext.next.type === 'tracks'
            ? t.next
            : `${t.locale === 'ar' ? 'ال' : ''}${t[pageContext.next.type]} ${t.next}`}
        </Tab>
      </nav>
      <StepContent active={activeTab === 'AR'} arabic content={arabicTranscription}>
        {navigationButtons}
      </StepContent>
      <StepContent active={activeTab === 'VOC'} content={chapterStrings.vocabulary}>
        {navigationButtons}
      </StepContent>
      <StepContent active={activeTab === 'AUDIO'}>
        <div className="mv4">
          <h1>{t.chapterAudio}</h1>
          <div>
            <h2 className="">{t.listenAudio}</h2>
            <audio className="w-100" controls src={chapter.audio} />
          </div>
          <div className="mv4">
            <h2 className="">{t.downloadAudio}</h2>
            <p className="">
              <a
                className="b"
                href={chapter.audio}
                title={chapterStrings.title}
                download
                rel="noopener noreferrer"
                target="_blank"
              >
                {t.clickHere}
              </a>
            </p>
          </div>
          {navigationButtons}
        </div>
      </StepContent>
      <StepContent active={activeTab === 'NEXT'}>{navigationButtons}</StepContent>
    </StepWrapper>
  )
}

export default Chapter
