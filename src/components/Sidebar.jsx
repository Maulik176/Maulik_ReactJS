import React from "react";
import "./Sidebar.css";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <AiFillInstagram />{" "}
        <a className="boom" href="https://www.instagram.com/__maulik__17__/">
          Instagram
        </a>
      </button>
      <button>
        <AiFillLinkedin />{" "}
        <a className="boom" href="https://www.linkedin.com/in/maulik-ranadive/">
          Linkedin
        </a>
      </button>
      <button>
        <AiFillGithub />{" "}
        <a className="boom" href="https://github.com/Maulik176">
          Github
        </a>
      </button>
    </div>
  );
}

export default Sidebar;
