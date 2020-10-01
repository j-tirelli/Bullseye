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
  :hover button {
    display: inline-block;
    position: absolute;
    margin-top: 70px;
  }
`;

export const RecListItem = styled.li`
  display: inline-block;
  color: grey;
  :hover p {
    color: black;
    text-decoration: none;
  }
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

export const RecItemAnchor = styled.a`
  text-decoration: none;
`;

export const NavButton = styled.button`
  padding: 0px 10px 4px 10px;
  background-color: white;
  color: black;
  font-size: 1.5em;
  border-radius: 50%;
  display: none;
  :hover {
    cursor: pointer;
  }
`;
