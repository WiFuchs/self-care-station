import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";

export class AudioPlayer extends Component {
  state = {
    status: "pause-circle"
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

  componentDidMount() {
    document.getElementById("podcastPlayer").play();
  }

  render() {
    return (
      <div style={audioPlayer}>
        <audio id="podcastPlayer">
          <source
            src="https://drive.google.com/uc?id=18lwjJEFZ7z_DMlBuiM6OrmLqoPx9YdCg&export=download"
            type="audio/mpeg"
          />
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
    );
  }
}

const audioPlayer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "10em"
};

export default AudioPlayer;
