import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
`;

export const CenterTextBox = styled.div`
  text-align: center;
`;

export const RecItemPrice = styled.p`
  font-size: 1em;
  text-decoration: underline;
  color: grey;
  text-align: center;
  font-weight: 600;
`;

export const RecItemTitle = styled.p`
  font-size: 0.75em;
  text-decoration: underline;
  color: grey;
  text-align: center;
`;

export const RecList = styled.ul`
  list-style-type: none;
  display: inline-block;
`;

export const RecListItem = styled.li`
  display: inline-block;
`;

export const RecItemImage = styled.img`
  width: 185px;
  height: 185px;
  margin: 6px;
`;

export const NavDotContainer = styled.div`
  display: inline-block;
  text-align: center;
  width: 10px;
  padding: 3px;
  :hover {
    cursor: pointer;
  }
`;

export const UnselectedDot = styled.span`
  border: 1px solid grey;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;

export const SelectedDot = styled.span`
  border: 1px solid grey;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 3px;
  margin-right: 3px;
  background-color: grey;
`;

