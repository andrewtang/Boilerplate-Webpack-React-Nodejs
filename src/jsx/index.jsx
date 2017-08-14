import '../js/imports';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './common/main';
import NavBar from './common/navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <Main />
        </div>
      </div>
    );
  }
}

const app =
(function () {

  /**
   * Public methods
   */
  return {

    init: () => {
      ReactDOM.render(
        <Router>
          <App />
        </Router>,
        document.querySelector('#container-main')
      );
    }

  };
}());

$(() => {
  app.init();
});

