/** @jsx jsx */
import { jsx } from 'theme-ui'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ShareIcon from '@material-ui/icons/Share'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { FC } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 200,
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
)

type BookCardType = {
  imageUrl: string
  description: string
}

const BookCard: FC<BookCardType> = ({ imageUrl, description }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div sx={{ height: [456, 300, 300], width: ['100%', 200, 200] }}>
        <img
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src={imageUrl}
        />
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Download this book">
          <CloudDownloadIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BookCard
