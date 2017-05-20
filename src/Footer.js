import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <h2>When you open your hand,  <br />they are satisfied with good things</h2>
          <h3>Psalm 104:28</h3>
          <a href="http://vantagechurch.com" className="white-logo"></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
