import React, { Component } from "react";
import PropTypes from "prop-types";

export class Podcast extends Component {
  render() {
    return (
      <div style={podcastStyle}>
        <p>{this.props.podcast.name.split(".")[0]}</p>
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
  podcast: PropTypes.object.isRequired
};

export default Podcast;
