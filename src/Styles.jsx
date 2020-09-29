import styled, { createGlobalStyle } from 'styled-components';

const styles = {};

styles.global = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
`;

styles.centerDiv = styled.div`
  text-align: center;
`;

styles.price = styled.p`
  font-size: 1em;
  text-decoration: underline;
  color: grey;
  text-align: center;
  font-weight: 600;
`;

styles.title = styled.p`
  font-size: 0.5em;
  text-decoration: underline;
  color: grey;
  text-align: center;
`;

styles.ul = styled.ul`
  list-style-type: none;
  display: inline-block;
`;

styles.li = styled.li`
  display: inline-block;
`;

styles.img = styled.img`
  width: 185px;
  height: 185px;
`;

styles.dot = styled.span`
  border: 1px solid grey;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  margin: 3px;
  :hover {
    cursor: pointer;
  }
`;

styles.selectedDot = styled.span`
  border: 1px solid grey;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  margin: 3px;
  background-color: grey;
`;

export default styles;
