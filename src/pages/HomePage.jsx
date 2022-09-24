import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrends } from 'service/fetchAPI';

export const HomePage = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetchTrends()
      .then(({ results }) => setTrends(results))
      .catch(console.log);
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trends.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
