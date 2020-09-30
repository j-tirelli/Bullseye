import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.jsx';
import ListItem from './ListItem.jsx';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
let app;

Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
  app = shallow(<App/>);
});

test('test suite is functional', () => {
  expect(true).toBe(true);
});

test('should render at least one ListItem component', () => {
  // this gets to listItems, but it's showing me an empty array:
  const items = app.getElement().props.children[1].props.children.props.children;
  expect(items.length).not.toBe(0);
});

// test('should have images, prices, and product names in list items', () => {
//   // let app = shallow(<App />);
//   debugger;
//   const firstItem = app.children[0].children[1].children[0].children[0].children[0];
//   expect(firstItem.children.length).toBe(3);
// });

// test('should have images, prices, and product names in list items', () => {
//   // const app = shallow(<App />);

// });
