import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MoviesDetails } from '../pages/MovieDetails/MoviesDetails';
import { Cast } from '../pages/MovieDetails/Cast/Cast';
import { Reviews } from '../pages/MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <>
            Page not found. Go back to <Link to="/">Home</Link>
          </>
        }
      />
    </Routes>
  );
};
