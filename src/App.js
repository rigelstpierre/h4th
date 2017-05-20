import React, { Component } from 'react';
import Header from './Header.js';
import Letter from './Letter.js';
import Footer from './Footer.js';
import 'normalize.css';
import './App.css';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Vantage Church | Heart For The House</title>
          <meta content="user-scalable=no, initial-scale=1, minimal-ui, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height" name="viewport" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="yes" name="mobile-web-app-capable" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7038576/6428372/css/fonts.css" />
        </Helmet>

        <Header />
        <Letter />
        <Footer />
      </div>
    );
  }
}

export default App;
