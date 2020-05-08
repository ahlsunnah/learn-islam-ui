/** @jsx jsx */
import { jsx } from 'theme-ui'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { Fragment } from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'

type PropType = {
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

const NEW_USER_QUERY = gql`
  mutation AddNewUser(
    $first_name: String!
    $country: String!
    $last_name: String!
    $gender: user_genders_enum!
    $email: String!
  ) {
    insert_users_one(
      object: { first_name: $first_name, country: $country, last_name: $last_name, email: $email, gender: $gender }
    ) {
      id
    }
  }
`

const Profile: React.FC<PropType> = () => {
  const [insert_users_one, { loading: mutationLoading, error: mutationError }] = useMutation(NEW_USER_QUERY)

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

  if (mutationError) {
    // TODO implement a push notification or an alert box
    // intercept the exeption type
    return <p>Error</p>
  }

  if (mutationLoading) {
    // TODO implement a spinner superposing the submit button
    return <p>loading</p>
  }

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
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
    </Fragment>
  )
}

export default Profile
