import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header>
        <div className="top-bar">
          <a href="http://vantagechurch.com" className="logo"></a>
        </div>
        <div className="container">
          <div className="callout"></div>
          <a href="http://vantagechurch.com/give" className="button">Give Today</a>
        </div>
      </header>
    );
  }
}

export default Header;
