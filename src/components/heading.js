import React from "react";

export default function Heading(props) {
  return (
    <>
      <h3>{props.text}</h3>
      {props.icon}
      {props.subtxt && <h3>{props.subtxt}</h3>}
    </>
  );
}
