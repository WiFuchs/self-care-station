import React, { Component } from "react";

export class Podcast extends Component {
  render() {
    return (
      <div style={podcastStyle}>
        <p>Podcast Title Here</p>
      </div>
    );
  }
}

const podcastStyle = {
  minWidth: "8em",
  minHeight: "8em",
  backgroundColor: "#6B7A8F",
  margin: "5px",
  color: "#F7882F"
};

export default Podcast;
