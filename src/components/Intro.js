import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro(props) {
  return (
    <div>
      <div className="intro content">
        <h1>
          Welcome to the <br /> Self-Care Station!
        </h1>
        <NavLink
          to="/home"
          className="btn"
          onClick={() => props.playIntro(true)}
        >
          Listen to an intro podcast
        </NavLink>
        <p>
          <strong>or...</strong>
        </p>
        <NavLink
          to="/home"
          onClick={() => props.playIntro(false)}
          className="btn btn-ghost"
        >
          Dive right in!
        </NavLink>
      </div>
    </div>
  );
}
