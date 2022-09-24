import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 4px;
  padding: 0 6px;
  height: 36px;
  text-decoration: none;
  border: 1px solid black;
`;

export const Box = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
export const ImgBox = styled.div`
  display: block;
  min-width: 230px;
  min-height: 350px;
  margin-right: 20px;
`;
