import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { MoviesSubPage } from 'pages/MoviesSubPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<Outlet />}>
          <Route path=":moviesId" element={<MoviesSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
