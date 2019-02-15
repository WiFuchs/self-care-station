/* global gapi */

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
    var request = gapi.client.drive.files.list({
      q: "'" + this.props.category.id + "' in parents"
    });
    request.execute(resp => {
      this.setState({ podcasts: resp.result.files });
    });
  };

  render() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <h3 style={catHeaderStyle}>{this.props.category.name}</h3>
        <div style={podCatStyle}>
          {this.state.podcasts.map(podcast => (
            <Podcast podcast={podcast} />
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

PodCat.propTypes = {
  category: PropTypes.object.isRequired
};

export default PodCat;
