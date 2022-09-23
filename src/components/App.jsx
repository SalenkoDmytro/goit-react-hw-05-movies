import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import svg from '../images/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg';

export const App = () => {
  return (
    <Container>
      <Header>
        {/* <a href="/" aria-label="logo">
          <svg width="100" height="40">
            <use>{svg}</use>
          </svg>
        </a> */}
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>}></Route>
      </Routes>
    </Container>
  );
};
