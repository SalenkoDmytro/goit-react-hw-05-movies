import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchData = fetchData => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchData(moviesId).then(setMovie);
  }, [moviesId, fetchData]);
  return movie;
};
