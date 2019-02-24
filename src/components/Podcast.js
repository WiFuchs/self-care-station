import React, { Component } from "react";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";

export class Podcast extends Component {
  state = {
    selected: false
  };
  podcastStyle = {
    position: "relative",
    width: "8em",
    height: "8em",
    minWidth: "8em",
    margin: "5px",
    color: "#f7714c",
    maxWidth: "10em",
    padding: "10px",
    backgroundColor: this.props.color
  };

  selectPodcast = () => {
    this.props.selectPodcast(this.props.podcast);
    this.setState({ selected: true });
  };

  render() {
    return (
      <div style={this.podcastStyle} onClick={this.selectPodcast}>
        <p>{this.props.podcast.name.split(".")[0]}</p>
        <FeatherIcon
          className="clickable"
          icon="play-circle"
          size="64"
          style={bottom}
        />
      </div>
    );
  }
}

const bottom = {
  position: "absolute",
  bottom: "1em",
  left: "2.5em"
};

Podcast.propTypes = {
  podcast: PropTypes.object.isRequired,
  selectPodcast: PropTypes.func.isRequired
};

export default Podcast;
