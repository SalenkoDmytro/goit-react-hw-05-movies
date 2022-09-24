import PropTypes from 'prop-types';
import { Button } from './Btn.styled';

export const Btn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} disabled={false}>
      Show more
    </Button>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
