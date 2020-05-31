/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from 'components/atoms/Button/Button'
import { Link } from 'gatsby'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

interface IProps {
  otherLocaleName: string
  otherLocalePath: string
  title: string
  handleDrawerToggle: () => void
}

const Header = ({ otherLocaleName, otherLocalePath, title, handleDrawerToggle }: IProps) => {
  const classes = useStyles()
  return (
    <div className="z-2 flex justify-between items-center bg-black-90 w-100">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <h3 sx={{ ml: 3, color: 'white' }}>{title}</h3>
      <div className="flex1 flex justify-end">
        <Link className="mh2 mh3-ns no-underline" to={otherLocalePath}>
          <Button rounded outlined className="white">
            {otherLocaleName}
          </Button>
        </Link>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
)

export default Header
