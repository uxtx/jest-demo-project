import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    maxWidth: '960px',
    margin: 'auto'
  }
}

class App extends Component {
  render () {
    const { props } = this;
    return (
      <div style={styles.container}>
        { props.children }
      </div>
    );
  }
}

App.proptypes = {
  children: PropTypes.node.isRequired,
};

export default App;
