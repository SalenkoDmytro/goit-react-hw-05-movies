import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item, Image } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ poster_path, title, id }) => {
  return (
    <Item>
      <Link to={`/movies/${id}`}>
        <Image
          width="100px"
          alt={title}
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          loading="lazy"
        />
        <h2>{title}</h2>
      </Link>
    </Item>
  );
};

MoviesGalleryItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
