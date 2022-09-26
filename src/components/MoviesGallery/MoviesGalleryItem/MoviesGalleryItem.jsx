import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Image } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ poster_path, title, id }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Image
          width="100px"
          alt={title}
          src={`https://image.tmdb.org/t/p/w342/${
            poster_path === null
              ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
              : poster_path
          }`}
          loading="lazy"
        />
        <h2>{title}</h2>
      </Link>
    </Item>
  );
};

MoviesGalleryItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
