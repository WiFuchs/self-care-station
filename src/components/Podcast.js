import React, { Component } from "react";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";

export class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      streamURL: ""
    };
    this.getURL(this.props.podcast);
  }

  selectPodcast = e => {
    var player = document.getElementById("podcastPlayer");
    player.src = this.state.streamURL;
    player.load();
    player.play();
    this.setState({ selected: true });
    this.props.selectPodcast(this.props.podcast.name.split(".")[0]);
  };

  getURL = podcast => {
    var self = this;
    window.dbx
      .sharingListSharedLinks({
        path: podcast.path_lower,
        direct_only: true
      })
      .then(response => {
        if (response.links.length) {
          self.setState({
            streamURL: response.links[0].url.replace(/.$/, "1")
          });
        } else {
          window.dbx
            .sharingCreateSharedLinkWithSettings({ path: podcast.path_lower })
            .then(response => {
              self.setState({
                streamURL: response.links[0].url.replace(/.$/, "1")
              });
            });
        }
      });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="podcast"
        onClick={this.selectPodcast}
      >
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
  podcast: PropTypes.object.isRequired
};

export default Podcast;
