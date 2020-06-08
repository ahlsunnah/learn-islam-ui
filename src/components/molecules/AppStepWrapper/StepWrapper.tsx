/** @jsx jsx */
import { jsx } from 'theme-ui'
import Sidebar from './Sidebar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      marginTop: '68px',
      width: drawerWidth,
      backgroundColor: '#293641',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

type Props = {
  drawerOpen: boolean
  handleDrawerToggle: () => void
}

const StepWrapper: React.FC<Props> = ({ children, drawerOpen, handleDrawerToggle }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Sidebar />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Sidebar />
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>{children}</main>
    </div>
  )
}

export default StepWrapper
