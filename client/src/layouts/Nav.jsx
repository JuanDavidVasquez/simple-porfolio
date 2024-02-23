import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimationLink from "../components/AnimationLink";

export default function Nav() {
  const [expand, setExpand] = useState(false);

  const handleMouseEnter = () => {
    setExpand(true);
  };

  const handleMouseLeave = () => {
    setExpand(false);
  };
let params= "sert";
  return (
    <nav className="px-10 py-4 montserrat text-xl">
      <ul className="flex justify-between items-center">
        <li>
          <AnimationLink url="/" title="Juan Vasquez" />
        </li>
        <li>Software Developer</li>
        <li className="flex gap-1">
          <AnimationLink url="/projects" title="Projects"/>
          <AnimationLink url="/projects" title="Experience" />
        </li>
      </ul>
    </nav>
  );
}
