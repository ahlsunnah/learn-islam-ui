import React, { FC, useMemo } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { TBookQueryQuery } from '../../generated/graphqlTypes'
import cx from 'classnames'
import LibraryContainer from 'components/modules/Library/Library'

type LibraryType = {
  data: TBookQueryQuery
}

const Library: FC<LibraryType> = ({ data }) => {
  const books = useMemo(() => data.api.books, [data])
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <LibraryContainer books={books} />
    </div>
  )
}

export default Library

export const pageQuery = graphql`
  query BookQuery {
    api {
      books {
        description
        id
        image_link
      }
    }
  }
`
