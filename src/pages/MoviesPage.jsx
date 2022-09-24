import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';

const { Outlet } = require('react-router-dom');

export const MoviesPage = () => {
  return (
    <>
      <MoviesSearch />
      <Outlet />
    </>
  );
};
