import React, { Component } from "react";
import HeaderBar from "./components/layout/HeaderBar";
import "./App.css";
import PodCat from "./components/PodCat";
import Footer from "./components/layout/Footer";

class App extends Component {
  state = {
    podcasts: [
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      },
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      },
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      },
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      },
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      },
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      },
      {
        id: 1,
        title: "avila",
        cat: "visualizations"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <HeaderBar />
        <PodCat podcasts={this.state.podcasts} />
        <PodCat podcasts={this.state.podcasts} />
        <PodCat podcasts={this.state.podcasts} />
        <Footer />
      </div>
    );
  }
}

export default App;
