/** @jsx jsx */
import { useFormik, FormikErrors } from 'formik'
import { Fragment, useCallback } from 'react'
import { Button, jsx, Label, Input, Box, Checkbox } from 'theme-ui'
import UIButton from '@material-ui/core/Button'
import { navigate } from 'gatsby'
import Alert from '@material-ui/lab/Alert'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { FirebaseUser } from 'services/auth'
import { FC, useState } from 'react'

type FormValues = {
  userName: string
  lastName: string
  firstName: string
  email: string
  password: string
}

type PropTypes = {
  addNewUser: (email: string, pwd: string) => Promise<void>
  signInWithEmailAndPwd: (email: string, pwd: string) => Promise<void>
  authUser: FirebaseUser
  path?: string
}

type LoginError = string | undefined

const Login: FC<PropTypes> = (props) => {
  const [isAccountCreated, setAccountCreated] = useState(false)
  const [loginError, setLoginError] = useState<LoginError>(undefined)
  const { addNewUser, signInWithEmailAndPwd, authUser } = props

  const [isNew, setIsNew] = useState(false)
  const { i18n, t } = useTranslation()

  const onAccountCreationHandler = useCallback(() => {
    setAccountCreated(false)
  }, [])

  const formik = useFormik<FormValues>({
    initialValues: {
      userName: '',
      lastName: '',
      firstName: '',
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
        if (isNew) {
          await addNewUser(values.email, values.password)
          setAccountCreated(true)
          setIsNew(false)
        } else {
          await signInWithEmailAndPwd(values.email, values.password)
        }
      } catch (err) {
        setLoginError(err.message)
      }
    },
  })

  if (authUser) {
    navigate('/app/profile')
    return null
  }

  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <div>
        <div
          sx={{
            maxWidth: 700,
            minHeight: 400,
            mx: 'auto',
            px: 3,
            py: 4,
          }}
        >
          {!isAccountCreated && (
            <Fragment>
              <div
                sx={{
                  textAlign: 'center',
                }}
              >
                <p>
                  {isNew ? t('allreadyHaveAccount') : t('haveAccount')}
                  <a
                    role="button"
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    onClick={() => setIsNew((prev) => !prev)}
                  >
                    {isNew ? t('identification') : t('registerAccount')}
                  </a>
                </p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <Label htmlFor="email" mb={2}>
                  Email
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
                {isNew && (
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
                )}
                <Button
                  type="submit"
                  sx={{
                    ml: 2,
                  }}
                >
                  {t('loginButton')}
                </Button>
              </form>
            </Fragment>
          )}

          <Fragment>
            {loginError && (
              <Alert
                variant="filled"
                severity="error"
                sx={{
                  mt: 4,
                }}
              >
                {loginError}
              </Alert>
            )}
            {isAccountCreated && (
              <Alert
                sx={{
                  mt: 4,
                }}
                action={
                  <UIButton onClick={onAccountCreationHandler} color="inherit" size="small">
                    Sign In
                  </UIButton>
                }
              >
                Your account has been created successfully
              </Alert>
            )}
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default Login
