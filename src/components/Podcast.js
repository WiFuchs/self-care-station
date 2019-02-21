import React, { Component } from "react";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";
import { isAbsolute } from "path";

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

const podcastStyle = {
  position: "relative",
  width: "8em",
  height: "8em",
  minWidth: "8em",
  backgroundColor: "#6B7A8F",
  margin: "5px",
  color: "#F7882F",
  maxWidth: "10em",
  padding: "10px"
};

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
