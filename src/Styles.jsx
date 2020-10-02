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
  display: flex;
  flex-direction: horizontal;
  justify-content: left;
  :hover button {
    display: block;
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

const NavButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: white;
  color: black;
  font-size: 1.5em;
  border: 2px solid black;
  z-index: 1;
  border-radius: 50%;
  display: none;
  margin-top: 90px;
  :hover {
    cursor: pointer;
  }
`;

export const NavButtonRight = styled(NavButton)`
  justify-self: flex-end;
  margin-left: -40px;
`;

export const NavButtonLeft = styled(NavButton)`
  justify-self: flex-start;
  margin-right: -40px;
`;
