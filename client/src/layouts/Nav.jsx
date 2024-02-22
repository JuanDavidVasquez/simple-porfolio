// Nav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [expand, setExpand] = useState(false);

  const handleMouseEnter = () => {
    setExpand(true);
  };

  const handleMouseLeave = () => {
    setExpand(false);
  };

  return (
    <nav className="px-10 py-4 montserrat text-xl">
      <ul className="flex justify-between items-center">
        <li>
          <Link
            className="link-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Juan Vasquez</span>
            <div className={`line js-line ${expand ? "expand" : ""}`}></div>
          </Link>
        </li>
        <li>Software Developer</li>
        <li className="flex gap-1">
          <Link
          className="link-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >Projects,
          <div className={`line js-line ${expand ? "expand" : ""}`}></div>
          </Link>
          <Link
          className="link-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >Experience
          <div className={`line js-line ${expand ? "expand" : ""}`}></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
