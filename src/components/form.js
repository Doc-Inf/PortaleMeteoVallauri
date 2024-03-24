import React from "react";
import Container from "./container";
import Heading from "./heading";

export default function Form() {
  const search = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
  return (
    <div className="w-full">
      <form
        className="gap-5 p-3 custom-bg d-flex align-items-center"
        style={{ borderRadius: "1rem" }}
      >
        <p className="p-0 m-0 custom-txt">Data:</p>
        <input className="form-control bg-body-secondary" type="date"></input>
        <button className="btn btn-outline-light d-flex justify-content-center align-items-center">
          {search}
        </button>
      </form>
    </div>
  );
}
