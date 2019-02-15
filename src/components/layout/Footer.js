import React from "react";
import FeatherIcon from "feather-icons-react";

function Footer() {
  return (
    <div style={footerStyle}>
      <div style={footerContainer}>
        <FeatherIcon icon="skip-back" className="clickable" />
        <FeatherIcon
          icon="play-circle"
          size="48"
          style={{ padding: "5px" }}
          className="clickable"
        />
        <FeatherIcon icon="skip-forward" className="clickable" />
      </div>
    </div>
  );
}

const footerContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "10em"
};

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
