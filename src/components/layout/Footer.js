import React from "react";
import AudioPlayer from "../AudioPlayer";

function Footer() {
  return (
    <div style={footerStyle}>
      <AudioPlayer />
    </div>
  );
}

const footerStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "space-around",
  bottom: "0px",
  backgroundColor: "#6B7A8F",
  padding: "10px",
  textAlign: "center",
  width: "100%",
  color: "#F7C331",
  height: "4em"
};

export default Footer;
