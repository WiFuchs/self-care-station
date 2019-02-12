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
        <iframe
          src="https://drive.google.com/drive/folders/16eSyuz-mgDVpGo_7sL65jaK8v-e_vMYN?usp=sharing"
          width="500"
          title="testVis"
          height="30"
          frameborder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen
        />
        <Footer />
      </div>
    );
  }
}

export default App;
