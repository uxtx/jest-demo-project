import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Stateless from './Stateless';
import './index.css';

const user = {
  name: 'Dave',
  interests: ['Family', 'Code', 'Guitar','Doña Sauce'],
  greeted: false,
}

ReactDOM.render(
  <App>
    <Stateless user={user}/>
  </App>,
  document.getElementById('root')
);
