import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AnimationLink({ url, title }) {
  const [expand, setExpand] = useState(false);

  const handleMouseEnter = () => {
    setExpand(true);
  };

  const handleMouseLeave = () => {
    setExpand(false);
  };

  return (
    <Link
      to={url}
      className="link-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
      <div className={`line js-line ${expand ? "expand" : ""}`}></div>
    </Link>
  );
}
