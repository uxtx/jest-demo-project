import React from 'react';
import PropTypes from 'prop-types';

const styles= {
  text: {
    textAlign: 'center',
    fontSize: 'large',
  }
};

const Stateless = ({ user }) => {
  return (
    <div style={ styles.text } >
      <h2>Welcome to Jest Testing, {user}</h2>
    </div>
  );
}

Stateless.proptypes = {
  user: PropTypes.string,
};

export default Stateless;
