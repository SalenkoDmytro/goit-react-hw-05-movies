import { useSearchParams } from 'react-router-dom';
import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';
import { useEffect, useState } from 'react';
import { fetchSearchQuery } from 'service/fetchAPI';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryParams) {
      fetchSearchQuery(queryParams)
        .then(({ results }) => setMovies(results))
        .catch(console.log);
    }
  }, [queryParams]);

  const filterMovies = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <MoviesSearch filterMovies={filterMovies} />
      {movies && <MoviesGallery data={movies} />}
    </>
  );
};

export default MoviesPage;
