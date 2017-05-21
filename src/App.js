import React, { Component } from 'react';
import Header from './Header.js';
import Letter from './Letter.js';
import Stories from './Stories.js';
import Footer from './Footer.js';
import 'normalize.css';
import './App.css';
import axios from 'axios';
import {Helmet} from "react-helmet";

class App extends Component {
  constructor() {
    super();

		this.state = {
			stories: [],
		}

		axios
			.get("/stories.json")
			.then((result) => {
        this.stories = result.data;
        this.setState({ stories: this.stories });
			});
  }

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
        <Stories stories={this.state.stories} />
        <section className="give">
          <h2>Your generosity makes a way for others.</h2>
          <a href="http://vantagechurch.com/give" className="button">Give Today</a>
          <div className="big-v"></div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
