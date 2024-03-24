import React from "react";

export default function SmallInfo(props) {
  return (
    <div className="card bg-transparent border-0 text-light w-100 text-center">
      <div className="card-header custom-bg rounded-top-4">
        <p className="fw-bold mb-0">{props.title}</p>
      </div>
      <div className="card-body">
        <p className="card-text fw-bold">{props.text}</p>
      </div>
    </div>
  );
}
