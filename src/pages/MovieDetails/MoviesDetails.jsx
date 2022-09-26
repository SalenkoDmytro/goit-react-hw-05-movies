import { Link, Outlet, useLocation } from 'react-router-dom';
import { useFetchData } from 'hooks/useFetchMovie';
import { fetchMoviesById } from 'service/fetchAPI';
import { Box, LinkStyled, ImgBox } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const movie = useFetchData(fetchMoviesById);
  const location = useLocation();
  if (!movie) return null;

  const { tagline, poster_path, title, vote_average, overview, genres } = movie;

  return (
    <main>
      <section>
        <LinkStyled to={location?.state?.from ?? '/'}>Go back</LinkStyled>
        <Box>
          <ImgBox>
            <img
              alt={tagline}
              width="230px"
              height="auto"
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              loading="lazy"
            />
          </ImgBox>
          <div>
            <h2>{title}</h2>
            <p>User Score: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => `${name} `)}</p>
          </div>
        </Box>
        <Box>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </Box>
        <Outlet />
      </section>
    </main>
  );
};

export default MoviesDetails;
