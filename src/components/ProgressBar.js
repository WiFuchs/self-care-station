import React from "react";

export default function ProgressBar(props) {
  return (
    <div className="progressBar">
      <div id="progressBar" style={{ width: `${props.percentage}%` }} />
    </div>
  );
}
