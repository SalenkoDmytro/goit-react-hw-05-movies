import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'service/fetchAPI';

export const useFetchMovie = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesById(moviesId).then(setMovie);
  }, [moviesId]);
  return movie;
};
