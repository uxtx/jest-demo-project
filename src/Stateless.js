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
      <h2>Welcome to Jest Testing, {user.name}</h2>
        { user.interests && user.interests.length &&
          <div>
            <p>I see your interests are
            </p>
            <ul>
            { user.interests.map((interest, i) => (
              <li key={`interest-${i}`}>{interest}</li>
            )) }
            </ul>
          </div>
        }
    </div>
  );
}

Stateless.proptypes = {
  user: PropTypes.object.isRequired,
};

export default Stateless;
