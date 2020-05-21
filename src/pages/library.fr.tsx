import React from 'react'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import LibraryContainer from 'components/modules/Library/Library'

const Library = () => {
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <LibraryContainer />
    </div>
  )
}

export default Library
