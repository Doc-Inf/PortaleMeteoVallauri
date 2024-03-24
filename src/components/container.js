import React from "react";
import "./css/container.css";

export default function Container(props) {
  let classes = "custom-container d-flex text-light h-100 custom-hover";
  if (props.vertical) classes += " flex-column";
  if (props.noPadding) classes += " p-0";
  else classes += " p-4 justify-content-around align-items-center";

  return <div className={classes}>{props.childs}</div>;
}
