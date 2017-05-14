import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserInfo from './user-info';
import './index.css';

const user = {
  name: 'Dave',
  interests: [ 'Hang out with family', ' Play guitar', 'Code', 'Enhale Doña sauce']
};

ReactDOM.render(
  <App>
    <UserInfo user={user}/>
  </App>,
  document.getElementById('root')
);
