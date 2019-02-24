import React from "react";
import FeatherIcon from "feather-icons-react";

function HeaderBar(props) {
  return (
    <div style={headerBarStyle}>
      <FeatherIcon
        icon="menu"
        style={{ paddingLeft: "1em" }}
        onClick={() => props.onSetSidebarOpen(true)}
      />
      <h2>Self-Care Station</h2>
      <FeatherIcon icon="search" style={{ paddingRight: "1em" }} />
    </div>
  );
}

const headerBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#6B7A8F",
  color: "#DCC7AA",
  width: "100%"
};

export default HeaderBar;
