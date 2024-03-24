import React, { useState } from "react";
import Container from "./container";
import Heading from "./heading";
import OurInfo from "./ourInfo";
import Histr from "./Histr";

import "./css/menu.css";
export default function Menu() {
  const rArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-compact-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
      />
    </svg>
  );
  // accordion: [0] = true = open / false = closed, [1] = classes
  const [info, setInfo] = useState([true, "col-12"]);
  const [loc, setLoc] = useState([false, "col-0"]);
  const [his, setHis] = useState([false, "col-0"]);
  const [el, setEl] = useState("info");
  function handleClick(e, str) {
    if (str === "info") {
      if (info[0]) {
        setInfo([false, "col-4"]);
        setLoc([false, "col-4"]);
        setHis([false, "col-4"]);
        setEl("");
      } else {
        setInfo([true, "col-12"]);
        setLoc([false, "col-0"]);
        setHis([false, "col-0"]);
        setEl("info");
      }
    } else if (str === "loc") {
      if (loc[0]) {
        setInfo([false, "col-4"]);
        setLoc([false, "col-4"]);
        setHis([false, "col-4"]);
        setEl("");
      } else {
        setLoc([true, "col-12"]);
        setInfo([false, "col-0"]);
        setHis([false, "col-0"]);
        setEl("loc");
      }
    } else if (str === "his") {
      if (his[0]) {
        setInfo([false, "col-4"]);
        setLoc([false, "col-4"]);
        setHis([false, "col-4"]);
        setEl("");
      } else {
        setHis([true, "col-12"]);
        setInfo([false, "col-0"]);
        setLoc([false, "col-0"]);
        setEl("his");
      }
    }
  }
  return (
    <>
      <div className="row mb-2">
        <div className={`${info[1]}`} onClick={(e) => handleClick(e, "info")}>
          <Container childs={<Heading text="Su di noi" icon={rArrow} />} />
        </div>
        <div className={`${loc[1]}`} onClick={(e) => handleClick(e, "loc")}>
          <Container
            childs={<Heading text="Dove ci troviamo" icon={rArrow} />}
          />
        </div>
        <div className={`${his[1]}`} onClick={(e) => handleClick(e, "his")}>
          <Container
            childs={<Heading text="La nostra storia" icon={rArrow} />}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          {console.log(el)}
          {el === "info" ? (
            <OurInfo />
          ) : el === "loc" ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.0416283289383!2d12.775315615372184!3d41.676444379238745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13259d347813ad7d%3A0x973948516bf1e19f!2sITIS%20Giancarlo%20Vallauri!5e0!3m2!1sit!2sit!4v1678190626853!5m2!1sit!2sit"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : el === "his" ? (
            <Histr />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
