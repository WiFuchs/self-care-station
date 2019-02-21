import React, { Component } from "react";
import HeaderBar from "./components/layout/HeaderBar";
import "./App.css";
import PodCat from "./components/PodCat";
import AudioPlayer from "./components/AudioPlayer";

class App extends Component {
  state = {
    categories: [],
    currentPodcast: "",
    podcastURL:
      "https://www.dropbox.com/s/k8q2wqewst8debh/Simple%20Song%20Strum.m4a?dl=1"
  };

  selectPodcast = podcast => {
    var self = this;
    window.dbx
      .sharingListSharedLinks({
        path: podcast.path_lower,
        direct_only: true
      })
      .then(response => {
        if (response.links.length) {
          var url = response.links[0].url.replace(/.$/, "1");

          self.setState({ podcastURL: url });
        } else {
          window.dbx
            .sharingCreateSharedLinkWithSettings({ path: podcast.path_lower })
            .then(response => {
              var url = response.url.replace(/.$/, "1");
              self.setState({ podcastURL: url });
            });
        }
      });
  };

  componentWillMount = () => {
    var fetch = require("isomorphic-fetch");
    var Dropbox = require("dropbox").Dropbox;
    window.dbx = new Dropbox({
      accessToken: process.env.REACT_APP_DBX_TOKEN,
      fetch: fetch
    });
    window.dbx
      .filesListFolder({ path: "" })
      .then(response => {
        this.setState({ categories: response.entries });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <HeaderBar />
        {this.state.categories.map(cat => (
          <PodCat
            key={cat.id}
            category={cat}
            selectPodcast={this.selectPodcast}
          />
        ))}
        <AudioPlayer source={this.state.podcastURL} />
      </div>
    );
  }
}

export default App;
