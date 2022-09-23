import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Outlet />
    </Container>
  );
};
