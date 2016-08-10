// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import MainMenu from '../components/MainMenu';
import Overview from './Overview';

class App extends React.Component {
  render() {
    return (
      <div id="app-container" className="container-fluid">
        <MainMenu />
        <div id="app-body">
        	{this.props.children || Overview}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  growler: PropTypes.object
};

function mapStateToProps(state) {
  const { growler } = state
  return {
    growler
  }
}

export default App