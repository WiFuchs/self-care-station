import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import ProgressBar from "./ProgressBar";
import "./../App.css";

export class AudioPlayer extends Component {
  state = {
    status: "pause-circle",
    percentage: 25
  };

  togglePlay = () => {
    var player = document.getElementById("podcastPlayer");
    if (this.state.status === "play-circle") {
      this.setState({ status: "pause-circle" });
      player.play();
    } else {
      this.setState({ status: "play-circle" });
      player.pause();
    }
  };

  calcPercentage = () => {
    var player = document.getElementById("podcastPlayer");
    this.setState({ percentage: (player.currentTime / player.duration) * 100 });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.source !== this.props.source) {
      var player = document.getElementById("podcastPlayer");
      player.currentTime = 0;
      player.load();
      player.play();
    }
  }

  render() {
    return (
      <div style={footerStyle}>
        <ProgressBar percentage={this.state.percentage} />
        <div style={audioPlayer}>
          <audio id="podcastPlayer" onTimeUpdate={this.calcPercentage}>
            <source src={this.props.source} type="audio/mpeg" />
          </audio>
          <FeatherIcon icon="skip-back" className="clickable" />
          <FeatherIcon
            icon={this.state.status}
            size="48"
            style={{ padding: "5px" }}
            className="clickable"
            onClick={this.togglePlay}
          />
          <FeatherIcon icon="skip-forward" className="clickable" />
        </div>
      </div>
    );
  }
}

const audioPlayer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
};

const footerStyle = {
  position: "fixed",
  bottom: "0px",
  backgroundColor: "#6B7A8F",
  padding: "0px",
  textAlign: "center",
  width: "100%",
  color: "#F7C331",
  height: "4em"
};

export default AudioPlayer;