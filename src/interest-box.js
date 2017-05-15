import React from 'react';
import PropTypes from 'prop-types';


class InterestBox extends React.Component {
  state = {
    interest: ''
  }

  _onInputChange = ({ target: { value } }) => {
    this.setState({ interest: value })
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

  render() {
    const { interest } = this.state;
    return (
      <div>
        <p>Add an Interest</p>
        <input
          value={interest}
          onChange={this._onInputChange}
          onKeyDown={ this._addOnEnter }
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
