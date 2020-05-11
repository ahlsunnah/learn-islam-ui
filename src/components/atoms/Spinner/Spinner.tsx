/** @jsx jsx */
import { jsx } from 'theme-ui'
import CircularProgress from '@material-ui/core/CircularProgress'

const Spinner = () => (
  <div
    sx={{
      display: 'flex',
    }}
  >
    <CircularProgress
      sx={{
        m: '0 auto',
      }}
    />
  </div>
)

export default Spinner
