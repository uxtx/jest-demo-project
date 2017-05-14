import React from 'react';
import InterestBox from './interest-box';
import { isPalindrome } from './utils/my-stupid-utils';
import PropTypes from 'prop-types';

const styles= {
  text: {
    fontSize: 'large',
  },
  remove: {
    cursor: 'pointer',
    color: '#cc0000',
    marginLeft: '1em'
  }

};


class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interests: props.user.interests,
    }
  }
  _removeInterest = (i) => {
    const { interests } = this.state;
    interests.splice(i, 1);
    this.setState({ interests });
  }

  _updateInterest = (interest) => {
    const { interests } = this.state;
    interests.push(interest)
    this.setState({ interests });
  }
  checkForPalindromes = () => {
    const { interests } = this.state;
    if (!interests.length) return;
    const palindromes = interests.filter(interest => isPalindrome(interest));
    return (
      <div>
        {`Interestingly,
          ${(palindromes.length) ? palindromes.length : 'none'}
          of my interests are palindromes`}
      </div>
    );
  }

  render () {
    const { user } = this.props;
    const { interests } = this.state;
    return (
      <div style={ styles.text } >
        <h2>All about {user.name}</h2>
          <InterestBox onInputSave={this._updateInterest} />
          { interests && !!interests.length &&
            <div>
              <p>I like to...
              </p>
              <ul>
              { interests.map((interest, i) => (
                <li key={`interest-${i}`}>
                  {interest}
                  <a
                    style={styles.remove}
                    onClick={() => this._removeInterest(i)}
                  >&times;</a>
                </li>
              )) }
              </ul>
              { this.checkForPalindromes() }
            </div>
          }
      </div>
    );
  }
}

UserInfo.proptypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;
