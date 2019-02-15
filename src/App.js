/* global gapi */

import React, { Component } from "react";
import HeaderBar from "./components/layout/HeaderBar";
import "./App.css";
import PodCat from "./components/PodCat";
import Footer from "./components/layout/Footer";

class App extends Component {
  state = {
    categories: []
  };
  componentDidMount = () => {
    gapi.client
      .init({
        apiKey: process.env.GOOGLE_DRIVE_API_KEY,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
        ]
      })
      .then(function() {
        return gapi.client.drive.files.list({
          q: "'16eSyuz-mgDVpGo_7sL65jaK8v-e_vMYN' in parents"
        });
      })
      .then(response => this.setState({ categories: response.result.files }));
  };

  render() {
    return (
      <div className="App">
        <HeaderBar />
        {this.state.categories.map(cat => (
          <PodCat category={cat} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
