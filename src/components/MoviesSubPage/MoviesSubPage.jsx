import { useFetchData } from 'hooks/useFetchMovie';
import { Link, Outlet } from 'react-router-dom';
import { fetchMoviesById } from 'service/fetchAPI';
import { Box, LinkStyled, ImgBox } from './MoviesSubPage.styled';

export const MoviesSubPage = () => {
  const movie = useFetchData(fetchMoviesById);
  return (
    <>
      {movie && (
        <section>
          <LinkStyled to="/">Go back</LinkStyled>
          <Box>
            <ImgBox>
              <img
                alt={movie.tagline}
                width="230px"
                height="auto"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                loading="lazy"
              />
            </ImgBox>
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(({ name }) => `${name} `)}</p>
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
      )}
    </>
  );
};
