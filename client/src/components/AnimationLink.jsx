import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function AnimationLink({ url, title }) {
  const [expand, setExpand] = useState(false);

  

  const handleClick = (e) => {
    e.preventDefault();

    // Animación para difuminar el cuerpo
    gsap.to(".App", { duration: 1, opacity: 0, 
    onComplete: () => {
      window.location.href = url;
    }});
  };

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
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
      <div className={`line js-line ${expand ? "expand" : ""}`}></div>
    </Link>
  );
}
