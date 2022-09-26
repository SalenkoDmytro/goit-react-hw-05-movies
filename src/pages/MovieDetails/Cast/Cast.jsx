import { useFetchData } from 'hooks/useFetchMovie';
import { fetchCast } from 'service/fetchAPI';

const Cast = () => {
  const data = useFetchData(fetchCast);
  if (!data) return null;
  return (
    <ul>
      {data &&
        data.cast.map(({ original_name, profile_path, character, id }) => (
          <li key={id}>
            <img
              width="60px"
              alt={original_name}
              src={`https://image.tmdb.org/t/p/w500/${
                profile_path === null
                  ? 'kZobKKPhs2vhuXu9SWvyg1u3zDM.jpg'
                  : profile_path
              }`}
              loading="lazy"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
