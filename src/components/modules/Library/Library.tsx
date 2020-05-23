/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import { TApi_Books } from '../../../../generated/graphqlTypes'
import BlueHero from 'components/molecules/Hero/BlueHero'
import HomeFooter from 'components/molecules/Footer/HomeFooter'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import BookCard from 'components/atoms/BookCard/BookCard'

type LibraryContainerType = {
  books: Array<Pick<TApi_Books, 'description' | 'id' | 'image_link'>>
}

const LibraryContainer: FC<LibraryContainerType> = ({ books }) => {
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
              {books.map((value, index) => (
                <Grid xs={12} md={3} lg={3} key={value.description + index} item>
                  <BookCard imageUrl={value.image_link} description={value.description} />
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
