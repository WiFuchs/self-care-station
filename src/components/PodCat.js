import React, { Component } from "react";
import Podcast from "./Podcast";
import PropTypes from "prop-types";

export class PodCat extends Component {
  render() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <h3 style={catHeaderStyle}>Guided Visualizations</h3>
        <div style={podCatStyle}>
          {this.props.podcasts.map(podcast => (
            <Podcast />
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
  overflowX: "scroll"
};

PodCat.PropTypes = {
  podcasts: PropTypes.array.isRequired
};

export default PodCat;
