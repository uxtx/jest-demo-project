import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const MyApp = ReactDOM.render(<App />, div);
  expect (MyApp).toBeTruthy();
});
