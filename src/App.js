import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    const { props } = this;
    return (
      <div>
        { props.children }
      </div>
    );
  }
}

App.proptypes = {
  children: PropTypes.node.isRequired,
};

export default App;
