import axios from 'axios';

const KEY = 'b8b0c1a2888367c1af45bfe14ca7aa54';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: KEY, language: 'en-US' };

export const fetchTrends = async () => {
  const { data } = await axios('/trending/movie/day');
  return data;
};

export const fetchMoviesById = async movie_id => {
  const { data } = await axios(`/movie/${movie_id}`);
  return data;
};
