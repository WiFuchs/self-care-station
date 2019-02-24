import React, { Component } from "react";
import HeaderBar from "./components/layout/HeaderBar";
import "./App.css";
import PodCat from "./components/PodCat";
import AudioPlayer from "./components/AudioPlayer";
import Sidebar from "react-sidebar";
import About from "./components/About";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      categories: [],
      currentPodcast: "",
      podcastURL:
        "https://www.dropbox.com/s/n2o4t86qxvtemqp/Introduction%20Podcast.mp3?dl=1"
    };
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  selectPodcast = podcast => {
    var self = this;
    self.setState({ currentPodcast: podcast });
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
      .filesListFolder({ path: "/podcasts" })
      .then(response => {
        this.setState({ categories: response.entries });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar
            sidebar={sidebarContent}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", padding: "1em" } }}
          >
            <HeaderBar onSetSidebarOpen={this.onSetSidebarOpen} />

            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <h1>Welcome to the Self-Care Station!</h1>
                  {this.state.categories.map(cat => (
                    <PodCat
                      key={cat.id}
                      category={cat}
                      selectPodcast={this.selectPodcast}
                    />
                  ))}
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />

            <AudioPlayer source={this.state.podcastURL} />
          </Sidebar>
        </div>
      </Router>
    );
  }
}

const sidebarContent = (
  <React.Fragment>
    <NavLink className="navLink mainNav" to="/">
      <h1>Self Care Station</h1>
    </NavLink>
    <NavLink className="navLink" activeClassName="navLinkActive" to="/about">
      About
    </NavLink>
  </React.Fragment>
);

export default App;
