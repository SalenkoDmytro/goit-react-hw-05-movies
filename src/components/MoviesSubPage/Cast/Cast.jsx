import { useFetchData } from 'hooks/useFetchMovie';
import { fetchCast } from 'service/fetchAPI';

export const Cast = () => {
  const data = useFetchData(fetchCast);
  return (
    <ul>
      {data &&
        data.cast.map(({ original_name, profile_path, character, id }) => (
          <li key={id}>
            <img
              width="60px"
              alt={original_name}
              src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
              loading="lazy"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};
