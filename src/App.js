import React, { Component } from "react";
import HeaderBar from "./components/layout/HeaderBar";
import "./App.css";
import PodCat from "./components/PodCat";
import AudioPlayer from "./components/AudioPlayer";
import Sidebar from "react-sidebar";
import About from "./components/About";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Intro from "./components/Intro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePlayer: "hidden",
      currentPodcast: "Introduction Podcast",
      sidebarOpen: false,
      categories: []
    };
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  playIntro = play => {
    this.setState({ hidePlayer: "" });
    if (play) {
      document.getElementById("podcastPlayer").play();
    }
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

  selectPodcast = podcast => {
    this.setState({ currentPodcast: podcast });
  };

  showAudio = () => {
    if (this.state.hidePlayer == "hidden") {
      this.setState({ hidePlayer: "visible" });
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderBar onSetSidebarOpen={this.onSetSidebarOpen} />
          <Sidebar
            sidebar={sidebarContent}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
              sidebar: {
                top: "4em",
                background: "#dee7ed"
              },
              content: {
                top: "4em",
                bottom: "6em",
                overflowY: "scroll"
              }
            }}
          >
            <Route
              exact
              path="/"
              render={() => {
                return <Intro playIntro={this.playIntro} />;
              }}
            />

            <Route
              path="/home"
              render={props => {
                this.showAudio();
                return (
                  <div className="content">
                    <h1>Welcome to the Self-Care Station!</h1>
                    {this.state.categories.map(cat => (
                      <PodCat
                        key={cat.id}
                        category={cat}
                        selectPodcast={this.selectPodcast}
                      />
                    ))}
                  </div>
                );
              }}
            />
            <Route
              path="/about"
              render={() => {
                this.showAudio();
                return <About />;
              }}
            />
          </Sidebar>
          <AudioPlayer
            hidden={this.state.hidePlayer}
            currentPodcast={this.state.currentPodcast}
          />
        </div>
      </Router>
    );
  }
}

const sidebarContent = (
  <React.Fragment>
    <NavLink className="navLink mainNav" to="/home">
      <h1>Self Care Station</h1>
    </NavLink>
    <NavLink className="navLink" activeClassName="navLinkActive" to="/about">
      Meet the Team
    </NavLink>
    <a className="navLink" href="https://www.instagram.com/calpolypulse/">
      Upcoming Events
    </a>
    <a className="navLink" href="tel:+1-805-756-6181">
      805.756.6181
    </a>
  </React.Fragment>
);

export default App;
