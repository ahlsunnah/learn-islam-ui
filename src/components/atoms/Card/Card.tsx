/** @jsx jsx */
import { jsx } from 'theme-ui'
import MaterialCard from '@material-ui/core/Card'

interface IProps {
  children: JSX.Element | JSX.Element[]
  className?: string
  rounded?: boolean
}
const Card = ({ children, className, rounded }: IProps): JSX.Element => (
  <MaterialCard
    className={className}
    sx={{
      borderRadius: rounded ? 11 : 0,
    }}
  >
    {children}
  </MaterialCard>
)
export default Card
