import React, { Component } from "react";
import Podcast from "./Podcast";
import PropTypes from "prop-types";
import "./../App.css";

const colors = ["#FFCEC0", "#B4D8EB", "#DCFABC", "#B4EFCF"];

export class PodCat extends Component {
  state = {
    podcasts: []
  };

  componentWillMount() {
    this.getPodcasts();
  }

  getPodcasts = () => {
    window.dbx
      .filesListFolder({ path: this.props.category.path_lower })
      .then(response => {
        this.setState({ podcasts: response.entries });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="podCatContainer">
        <h3>{this.props.category.name}</h3>
        <div className="podCat">
          {this.state.podcasts.map((podcast, index) => (
            <Podcast
              key={podcast.id}
              podcast={podcast}
              selectPodcast={this.props.selectPodcast}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </div>
      </div>
    );
  }
}

PodCat.propTypes = {
  category: PropTypes.object.isRequired
};

export default PodCat;
