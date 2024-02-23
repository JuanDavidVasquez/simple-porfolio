import React, { useEffect } from "react";
import { gsap } from "gsap/all";
import Header from '../layouts/Header'

export default function Projects() {

  useEffect(()=>{
    gsap.fromTo('.projects', {
        opacity:0,
        ease: "none",
        duration:"1s",
        overwrite: true,
      },{
        opacity:1,
  
      });
},[])

  return (
    <div className='projects grid grid-cols-12'>
       <h1>Projects</h1>
    </div>
  )
}
