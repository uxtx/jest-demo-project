import React from 'react';
import PropTypes from 'prop-types';


class InterestBox extends React.Component {
  state = {
    interest: ''
  }

  _addOnEnter = ({ keyCode }) => {
    if (keyCode === 13) {
      this._addInterest()
    }
  }

  _addInterest = () => {
    const { onInputSave } = this.props;
    const { interest } = this.state;
    onInputSave(interest);
    this.setState({ interest: '' })
  }

  _onInputChange = ({ target: { value } }) => {
    this.setState({ interest: value })
  }

  render() {
    const { interest } = this.state;
    return (
      <div>
        <p>Add an Interest</p>
        <input
          value={interest}
          onKeyDown={ this._addOnEnter }
          onChange={this._onInputChange}
        />
        <input
          onClick={this._addInterest}
          id="addInterest"
          type="button"
          value="Add Interest"
        />
      </div>
    );

  }
}

InterestBox.proptypes = {
  onInputSave: PropTypes.func.isRequired
};

export default InterestBox;
