import React, { useEffect } from "react";
import { gsap } from "gsap/all";
import Header from '../layouts/Header'
import ProjectGallery from "../components/projects/ProjectGallery";

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
    <div className='projects w-full grid grid-cols-12 py-10'>
       <h1 className="montserrat w-full col-start-2 col-span-10 py-1 project-title">Projects</h1>
       <ProjectGallery/>
    </div>
  )
}
