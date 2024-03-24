import React from "react";
import { Link } from "react-router-dom";
import "./css/custom-bg.css";
import "./css/navbar.css";
const Nav = (props) => {
  let hm = "",
    abt = "",
    his = "",
    log = "";
  console.log(props.active);
  if (props.active === "/") hm = "active";
  else if (props.active === "/chi_siamo") abt = "active";
  else if (props.active === "/storico") his = "active";
  return (
    <nav className="navbar navbar-expand rounded-5 custom-bg navbar-dark">
      <ul className="navbar-nav m-auto">
        <li className={`nav-item px-4 ${hm}`} id="home">
          <Link to="/" className="nav-link">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </Link>
        </li>
        <li className={`nav-item px-4 ${abt}`}>
          <Link to="/chi_siamo" className="nav-link">
            {" "}
            Chi siamo
          </Link>
        </li>
        <li className={`nav-item px-4 ${his}`}>
          <Link to="/storico" className="nav-link">
            {" "}
            Storico
          </Link>
        </li>
        <li className="nav-item px-4">
          <Link to="/accedi" className="nav-link">
            {" "}
            Accedi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
