import React from "react";
import Heading from "./heading";
import "../index.css"; // for custom-txt, custom-txt-sm
export default function ScrollCard(props) {
  return (
    <>
      <div className="text-center text-nowrap my-3">
        <Heading text={props.title} />
      </div>
      <img src={props.img} className="card-img rounded-4 mb-3"></img>
      <div
        className="card bg-transparent border-5 border-light-subtle rounded-4 overflow-scroll"
        style={{ height: "200px" }}
      >
        <div className="card-text p-3">
          <p className="custom-txt text-light custom-txt-sm">{props.text}</p>
        </div>
      </div>
    </>
  );
}
