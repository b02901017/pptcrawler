import React, { Component } from 'react';

import HomePage from './HomePage';
import Navbar from './Navbar';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/users') {
      return <UsersPage />;
    }

    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }

    return <HomePage />;
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;
