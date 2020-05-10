/** @jsx jsx */
import { jsx } from 'theme-ui'
import gql from 'graphql-tag'
import { useMemo, useState } from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import _get from 'lodash/get'
import _upperFirst from 'lodash/upperFirst'
import { useMutation, useQuery } from '@apollo/react-hooks'
import Card from '@material-ui/core/Card'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { Fragment } from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { FirebaseUser } from 'services/auth'
import TextField from '@material-ui/core/TextField'
import { TApi_Users } from '../../../graphqlTypes'
import { useFormik } from 'formik'
import { MeQuery, MeQueryVariables } from '../../../hasuraTypes'

type PropType = {
  me: FirebaseUser
  signOut: () => Promise<void>
  path?: string
}

type FormValues = {
  gender: string
  firstName: string
  lastName: string
  email: string
  country: string
}

type MutationErrorType = string | null

const USER_QUERY = gql`
  query Me($id: String!) {
    users(where: { fbase_id: { _eq: $id } }) {
      id
      first_name
      email
      last_name
      country
    }
  }
`

const NEW_USER_QUERY = gql`
  mutation AddNewUser(
    $first_name: String!
    $country: String!
    $last_name: String!
    $gender: user_genders_enum!
    $email: citext!
  ) {
    insert_users_one(
      object: { first_name: $first_name, country: $country, last_name: $last_name, email: $email, gender: $gender }
    ) {
      id
    }
  }
`

const Profile: React.FC<PropType> = ({ me, signOut }) => {
  const [isEditProfile, setEditProfile] = useState(false)
  const classes = useStyles()
  const currentUserId = useMemo(() => _get(me, 'uid', ''), [me])
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery<MeQuery, MeQueryVariables>(
    USER_QUERY,
    {
      variables: { id: currentUserId },
    }
  )

  const meData: TApi_Users = _get(queryData, 'users.[0]')

  const userFullName = `${_upperFirst(_get(meData, 'last_name'))}  ${_upperFirst(_get(meData, 'first_name'))}`
  const email = _get(meData, 'email')
  const country = _upperFirst(_get(meData, 'country'))

  const [insert_users_one, { loading: mutationLoading, error: mutationError }] = useMutation(NEW_USER_QUERY)

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      gender: 'female',
      firstName: '',
      lastName: '',
      email: '',
      country: '',
    },

    onSubmit: (values) => {
      insert_users_one({
        variables: {
          first_name: values.firstName,
          country: values.country,
          last_name: values.lastName,
          email: values.email,
          gender: values.gender,
        },
      })
    },
  })

  if (mutationError || queryError) {
    // TODO implement a push notification or an alert box
    // intercept the exeption type
    return <p>Error</p>
  }

  if (mutationLoading || queryLoading) {
    // TODO implement a spinner superposing the submit button
    return <p>loading</p>
  }

  return (
    <Fragment>
      {meData && (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {userFullName}
            </Typography>
            <Grid container direction="row" justify="flex-start">
              <Grid item>
                <EmailRoundedIcon />
              </Grid>
              <Grid
                item
                sx={{
                  ml: 1,
                }}
              >
                <Typography className={classes.pos} color="textSecondary">
                  {email}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-start">
              <Grid item>
                <LocationOnRoundedIcon />
              </Grid>
              <Grid
                item
                sx={{
                  ml: 1,
                }}
              >
                <Typography className={classes.pos} color="textSecondary">
                  {country}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setEditProfile((prev) => !prev)}>
              Edit profile
            </Button>
            <Button size="small" onClick={handleSignOut}>
              Sign Out
            </Button>
          </CardActions>
        </Card>
      )}
      {isEditProfile && (
        <form
          onSubmit={formik.handleSubmit}
          sx={{
            mt: 2,
          }}
        >
          <FormControl component="fieldset" margin="dense">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
              <FormControlLabel value="F" control={<Radio />} label="Female" />
              <FormControlLabel value="M" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <TextField
              value={formik.values.firstName}
              onChange={formik.handleChange}
              name="firstName"
              label="Name"
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  boxSizing: 'unset',
                },
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <TextField
              value={formik.values.lastName}
              onChange={formik.handleChange}
              name="lastName"
              label="Last Name"
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  boxSizing: 'unset',
                },
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              label="Email"
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  boxSizing: 'unset',
                },
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <TextField
              value={formik.values.country}
              onChange={formik.handleChange}
              name="country"
              label="Country"
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  boxSizing: 'unset',
                },
              }}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
            }}
          >
            Submit
          </Button>
        </form>
      )}
    </Fragment>
  )
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default Profile
