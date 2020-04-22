/** @jsx jsx */
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import { Button, jsx, Label, Input, Box, Checkbox } from 'theme-ui'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { i18n } = useTranslation()
  return (
    <div className={cx({ rtl: i18n.language === 'ar' })}>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <div>
        <BlueHero description="Login" title="Welcome" />
        <div
          sx={{
            maxWidth: 700,
            minHeight: 400,
            mx: 'auto',
            px: 3,
            py: 4,
          }}
        >
          <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="username" mb={2}>
              Username
            </Label>
            <Input name="username" mb={3} />
            <Label htmlFor="password" mb={2}>
              Password
            </Label>
            <Input type="password" name="password" mb={3} />
            <Box mb={3}>
              <Label
                sx={{
                  alignItems: 'center',
                }}
              >
                <Checkbox />
                En cochant cette case, j&apos;accepte que mes données personnelles soient utilisées
              </Label>
            </Box>
            <Button>Login</Button>
          </Box>
        </div>
        <HomeFooter firstTrackSlug="add" withTrackSlug={false} />
      </div>
    </div>
  )
}

export default Login
