import React, { Component } from 'react';


class Navbar extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      
      <div className ='layout'>
        <nav className="navbar">
          <img className="logo" src="../static/img/logo.png" alt="logo"/>
        </nav>
  
      </div>       
      
    );
  }
}

export default Navbar;