import React, { Component } from "react";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";

export class Podcast extends Component {
  state = {
    selected: false
  };

  selectPodcast = () => {
    this.props.selectPodcast(this.props.podcast);
    this.setState({ selected: true });
  };

  render() {
    return (
      <div style={podcastStyle} onClick={this.selectPodcast}>
        <p>{this.props.podcast.name.split(".")[0]}</p>
        <FeatherIcon icon="play-circle" />
      </div>
    );
  }
}

const podcastStyle = {
  minWidth: "8em",
  minHeight: "8em",
  backgroundColor: "#6B7A8F",
  margin: "5px",
  color: "#F7882F",
  maxWidth: "10em",
  padding: "10px"
};

Podcast.propTypes = {
  podcast: PropTypes.object.isRequired,
  selectPodcast: PropTypes.func.isRequired
};

export default Podcast;
