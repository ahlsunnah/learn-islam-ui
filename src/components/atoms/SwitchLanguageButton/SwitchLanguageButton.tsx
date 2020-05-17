/** @jsx jsx */
import Button from 'components/atoms/Button/Button'
import { Link } from 'gatsby'
import useLanguageSwitcher from 'hooks/useLanguageSwitcher'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { jsx } from 'theme-ui'

type Props = {}

const SwitchLanguageButton: React.FC<Props> = () => {
  const { t } = useTranslation()
  const { handleChangeLanguage, otherLanguagePath } = useLanguageSwitcher()
  return (
    <Button
      rounded
      outlined
      onClick={handleChangeLanguage}
      component={Link}
      to={otherLanguagePath}
      sx={{
        mx: '.5rem',
        textDecoration: 'none',
      }}
    >
      {t('otherTranslationsLocaleName')}
    </Button>
  )
}

export default SwitchLanguageButton
