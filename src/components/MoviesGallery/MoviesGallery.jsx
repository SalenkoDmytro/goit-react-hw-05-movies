import PropTypes from 'prop-types';
import { MoviesList } from './MoviesGallery.styled';
import { MoviesGalleryItem } from './MoviesGalleryItem/MoviesGalleryItem';

export function MoviesGallery({ data }) {
  return (
    <MoviesList>
      {data.map(({ id, ...props }) => (
        <MoviesGalleryItem key={id} {...props} id={id} />
      ))}
    </MoviesList>
  );
}

MoviesGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
