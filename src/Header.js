import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="top-bar">
            <a href="#" className="logo"></a>
          </div>
          <div className="callout"></div>
          <a href="#" className="button">Give Today</a>
        </div>
      </header>
    );
  }
}

export default Header;
