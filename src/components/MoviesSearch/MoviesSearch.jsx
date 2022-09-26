import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Searchbar from '../Searchbar/Searchbar';
import { Container } from './MoviesSearch.styled';
import { fetchSearchQuery } from 'service/fetchAPI';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export const MoviesSearch = ({ filterMovies }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isShown, setIsShown] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryParams = searchParams.get('query') ?? '';
  useEffect(() => {
    if (isShown) {
      fetchSearchQuery(searchQuery)
        .then(({ results }) => {
          if (!results) Notiflix.Notify.failure('No results, try again');
          setMovies(prevMovies => [...prevMovies, ...results]);
        })
        .catch(error =>
          Notiflix.Notify.failure(`Something went wrong! ${error.message}`)
        );
    }
  }, [searchQuery, isShown]);

  const onFormSubmit = async search => {
    if (!search) return Notiflix.Notify.info('Please, enter some letters...');
    setSearchQuery(search);

    setMovies([]);
    setIsShown(true);
    filterMovies(search);
    // setSearchParams(search !== '' ? { query: search } : {});
  };

  return (
    <Container>
      <Searchbar onSubmit={onFormSubmit} />
      {isShown && <MoviesGallery data={movies} />}
    </Container>
  );
};
