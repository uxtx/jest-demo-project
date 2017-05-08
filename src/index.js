import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Stateless from './Stateless';
import './index.css';

ReactDOM.render(
  <App>
    <Stateless user={'Dave'}/>
  </App>,
  document.getElementById('root')
);
