import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.jsx';

test('test suite is functional', () => {
  expect(true).toBe(true);
});

test('should render at least one ListItem component', () => {
  const component = renderer.create(
    <App />
  );
  let app = component.toJSON();
  expect(app).toMatchSnapshot();
});

/*
test('should render at least one ListItem component', () => {});
*/
