import React from "react";
import Heading from "./heading";
import "../index.css"; // for custom-txt
export default function People(props) {
  return (
    <>
      <div className="text-center">
        <Heading text={`Partecipanti al Progetto [${props.type}]`} />
      </div>
      <div
        className="bg-light w-100 rounded-2 my-4"
        style={{ height: "1px" }}
      ></div>
      <div className="scroll text-center">
        {props.people.map((person) => (
          <h2
            className={
              props.type == "Professori" ? "custom-txt" : "fw-bold text-light"
            }
          >
            {person.length > 1 ? `${person[0]} [${person[1]}]` : person}
          </h2>
        ))}
      </div>
    </>
  );
}
