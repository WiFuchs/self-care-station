import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import ProgressBar from "./ProgressBar";
import "./../App.css";

export class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "play-circle",
      percentage: 0
    };
  }

  togglePlay = e => {
    var player = document.getElementById("podcastPlayer");
    if (this.state.status === "pause-circle") {
      player.pause();
    } else {
      player.play();
    }
  };

  calcPercentage = () => {
    var player = document.getElementById("podcastPlayer");
    this.setState({ percentage: (player.currentTime / player.duration) * 100 });
  };

  setPlaying = stat => {
    this.setState({ status: stat });
  };

  componentDidMount() {
    var player = document.getElementById("podcastPlayer");
    player.onplaying = () => {
      this.setState({ status: "pause-circle" });
    };
    player.onpause = () => {
      this.setState({ status: "play-circle" });
    };
  }

  audioCanPlay = () => {
    this.setState({ status: "play-circle" });
  };

  audioLoading = () => {
    this.setState({ status: "loader" });
  };

  render() {
    return (
      <div id="footer" style={footerStyle} className={this.props.hidden}>
        <ProgressBar percentage={this.state.percentage} />
        <div style={audioPlayer}>
          <audio
            id="podcastPlayer"
            onTimeUpdate={this.calcPercentage}
            onCanPlay={this.audioCanPlay}
            onLoadStart={this.audioLoading}
            src="https://www.dropbox.com/s/jxx03ipc23xfhx5/Introduction%20Podcast.mp3?dl=1"
          />
          <FeatherIcon
            id="statusIcon"
            icon={this.state.status}
            size="48"
            style={{ padding: "5px" }}
            className={`${this.state.status} clickable`}
            onClick={this.togglePlay}
          />
          <p
            style={{
              marginTop: "0",
              fontStyle: "italic",
              fontWeight: "bold"
            }}
          >
            {this.props.currentPodcast}
          </p>
        </div>
      </div>
    );
  }
}

const audioPlayer = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const footerStyle = {
  position: "fixed",
  bottom: "0px",
  zIndex: "4",
  backgroundColor: "#9ACDE0",
  padding: "0px",
  textAlign: "center",
  width: "100%",
  height: "6em",
  color: "#FFF"
};

export default AudioPlayer;
