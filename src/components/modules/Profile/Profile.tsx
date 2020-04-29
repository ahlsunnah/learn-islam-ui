/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'

type PropType = {
  path?: string
}

const Profile: React.FC<PropType> = () => {
  const [value, setValue] = React.useState('female')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <Fragment>
      <FormControl component="fieldset" margin="dense">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth margin="dense">
        <TextField
          id="outline-basic"
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
          id="outline-basic"
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
          id="outline-basic"
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
          id="outline-basic"
          label="Country"
          variant="outlined"
          sx={{
            '& .MuiInputBase-input': {
              boxSizing: 'unset',
            },
          }}
        />
      </FormControl>
    </Fragment>
  )
}

export default Profile
