/** @jsx jsx */
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import { useFormik, FormikErrors } from 'formik'
import { Button, jsx, Label, Input, Box, Checkbox } from 'theme-ui'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import useAuth from 'services/auth'
import { FC } from 'react'

type FormValues = {
  email: string
  password: string
}

type PropTypes = {
  path?: string
}

const Login: FC<PropTypes> = () => {
  const { i18n, t } = useTranslation()
  const { signInWithEmailAndPwd } = useAuth()

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: FormikErrors<typeof values> = {}
      if (!values.email) {
        errors.email = 'Email is mandatory'
      }
      return errors
    },
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPwd(values.email, values.password)
      } catch (err) {
        console.log(err)
      }
    },
  })

  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <div>
        <BlueHero description={t('blueHeroLoginDescription')} title={t('blueHeroLoginTitle')} />
        <div
          sx={{
            maxWidth: 700,
            minHeight: 400,
            mx: 'auto',
            px: 3,
            py: 4,
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Label htmlFor="email" mb={2}>
              {t('loginUserName')}
            </Label>
            <Input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} mb={3} />
            <Label htmlFor="password" mb={2}>
              {t('loginPassword')}
            </Label>
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              mb={3}
            />
            <Box mb={3}>
              <Label
                sx={{
                  alignItems: 'center',
                }}
              >
                <Checkbox />
                {t('loginCheckBox')}
              </Label>
            </Box>
            <Button
              type="submit"
              sx={{
                ml: 2,
              }}
            >
              {t('loginButton')}
            </Button>
          </form>
        </div>
        <HomeFooter firstTrackSlug="add" withTrackSlug={false} />
      </div>
    </div>
  )
}

export default Login
