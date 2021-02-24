import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Hero } from "../../../assets/images/hero.svg";
import "./_header.scss";

export default function Header({ setCss, css }) {
  const [mode, SetMode] = useState(false);
  return (
    <div id="header" className={mode ? "header--dark" : "header"}>
      <Hero />
      <div>
        <h1>Your favourite tunes</h1>
        {mode ? (
          <h2>
            All{" "}
            <button
              onClick={() => {
                SetMode(false);
                setCss(false);
              }}
            >
              <FontAwesomeIcon
                className=""
                icon={faMoon}
                size="md"
                color="white"
              />
            </button>{" "}
            and all{" "}
            <button>
              <FontAwesomeIcon
                className="iconStyle"
                icon={faSun}
                size="md"
                color="#ffd60b"
              />
            </button>
          </h2>
        ) : (
          <h2>
            All{" "}
            <button
              onClick={() => {
                SetMode(true);
                setCss(!css);
              }}
            >
              <FontAwesomeIcon
                className="iconStyle"
                icon={faSun}
                size="md"
                color="#ffd60b"
              />
            </button>{" "}
            and all{" "}
            <button>
              <FontAwesomeIcon
                className="iconStyle"
                icon={faMoon}
                size="md"
                color=""
              />
            </button>
          </h2>
        )}
      </div>
    </div>
  );
}
