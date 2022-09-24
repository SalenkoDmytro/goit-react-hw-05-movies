import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MoviesSubPage } from 'components/MoviesSubPage/MoviesSubPage';
import { Cast } from './MoviesSubPage/Cast/Cast';
import { Reviews } from './MoviesSubPage/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":moviesId" element={<MoviesSubPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
