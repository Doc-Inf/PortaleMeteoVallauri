import React from "react";
import "./css/custom-bg.css"; // for cst-bg class
import "./css/container.css"; // for cst-border class

export default function Info(props) {
  return (
    <div className="container p-2 mb-5">
      <div className="card border-0 rounded-3">
        <ul className="list-group list-group-flush rounded-3">
          {props.items.map((item) => (
            <li className="list-group-item text-center custom-border custom-bg">
              <h4 className="text-light">{item}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
