import React, { Component } from "react";
import Podcast from "./Podcast";
import PropTypes from "prop-types";

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
      <div style={{ marginBottom: "1em" }}>
        <h3 style={catHeaderStyle}>{this.props.category.name}</h3>
        <div style={podCatStyle}>
          {this.state.podcasts.map(podcast => (
            <Podcast
              key={podcast.id}
              podcast={podcast}
              selectPodcast={this.props.selectPodcast}
            />
          ))}
        </div>
      </div>
    );
  }
}

const catHeaderStyle = {
  fontWeight: "bold",
  color: "#F7882F"
};

const podCatStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  overflowX: "auto"
};

PodCat.propTypes = {
  category: PropTypes.object.isRequired,
  selectPodcast: PropTypes.func.isRequired
};

export default PodCat;
