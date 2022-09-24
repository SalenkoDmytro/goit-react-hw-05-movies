import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Btn from '../Btn/Btn';
// import ImageGallery from '';
// import Loader from '';
import Searchbar from '../Searchbar/Searchbar';
import { Container } from './MoviesSearch.styled';
import { fetchSearchQuery } from 'service/fetchAPI';

export const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (isShown) {
      setIsLoading(true);
      fetchSearchQuery(searchQuery, page)
        .then(({ results, total_results }) => {
          if (!results) Notiflix.Notify.failure('No results, try again');
          setMovies(prevMovies => [...prevMovies, ...results]);
          setTotalResults(total_results);
          setIsLoading(false);
        })
        .catch(Notiflix.Notify.failure);
    }
  }, [searchQuery, page, isShown]);

  const onFormSubmit = async search => {
    setSearchQuery(search);
    setPage(1);
    setMovies([]);
    setIsShown(true);
  };

  const handleClick = async () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={onFormSubmit} />
      {/* {isShown && <ImageGallery data={movies} />}
      {!isLoading && movies.length > 0 && movies.length < totalResults && (
        <Btn onClick={handleClick} />
      )}
      {isLoading && <Loader />} */}
    </Container>
  );
};
