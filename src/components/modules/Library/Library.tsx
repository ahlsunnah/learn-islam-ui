/** @jsx jsx */
import { jsx } from 'theme-ui'
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import BookCard from 'components/atoms/BookCard/BookCard'

const LibraryContainer = () => {
  return (
    <div>
      <BlueHero title="Library Page" />
      <Container
        maxWidth="md"
        sx={{
          p: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={4}>
              {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                <Grid xs={12} md={3} lg={3} key={value} item>
                  <BookCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <HomeFooter />
    </div>
  )
}
export default LibraryContainer
