import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Form, Button, Label, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const reset = () => {
    setText('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(text.trim());
    reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          onChange={handleChange}
          value={text}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </Wrapper>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
