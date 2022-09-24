import { useFetchData } from 'hooks/useFetchMovie';
import { fetchReviews } from 'service/fetchAPI';

export const Reviews = () => {
  const data = useFetchData(fetchReviews);
  return (
    <>
      {data && data.results.length > 0 ? (
        <ul>
          {data.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
