import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function ProjectDetail({
  selectedProject,
  composicion,
  resumen,
  proyecto,
}) {

  useEffect(()=>{
    const detailGalleryProject = document.querySelector('.detailGalleryProject');
    const nameProject = document.querySelector('.nameProject');
    gsap.to(nameProject,{opacity:0})


    gsap.to(detailGalleryProject,{opacity:1, x:5000, onComplete:()=>{
      gsap.to(detailGalleryProject,{
        opacity:1,
        y:0,
        x:"0%",
        ease:"bounce.in",
        duration:2
      })
    }})

   

  },[])

  useEffect(()=>{
    const resetButton = document.querySelector('.resetAnimation');
    gsap.to(resetButton,{opacity:1,y:-200})
    const detailGalleryProject = document.querySelector('.detailGalleryProject');
    const nameProject = document.querySelector('.nameProject');
    gsap.to(nameProject,{opacity:0})

    gsap.to(detailGalleryProject,{opacity:1, x:5000, onComplete:()=>{
      gsap.to(detailGalleryProject,{
        opacity:1,
        y:0,
        x:"0%",
        zIndex:1,
        ease:"bounce.in",
        duration:2
      })
    }})

   
  },[selectedProject])

  const [expand, setExpand] = useState(false);
  const handleMouseEnters = () => {
    setExpand(true);
  };

  const handleMouseLeaves = () => {
    setExpand(false);
  };

  return (
    <div className="absolute top-1/3 left-1/3 detailGalleryProject">
      {selectedProject && (
        <div>
          <h1 className="montserrat col-span-5 py-1 project-title">
            {selectedProject}
          </h1>
          <p className="montserrat w-1/5 text-2xl">
            <span className="latoLight text-2xl font-bold">Composición:</span>{" "}
            {composicion}
          </p>
          <p className="montserrat text-2xl">
          <span className="latoLight text-2xl font-bold">Resumen:</span> {resumen}</p>
          {selectedProject !== 'oneLessonPerDay' &&
          <a href={proyecto} target="blank_"
          onMouseEnter={handleMouseEnters}
          onMouseLeave={handleMouseLeaves}
          className="link-container"
          >
          Go to Project!
          <div className={`line js-line ${expand ? "expand" : ""}`}></div>
          </a>
        }
        </div>
      )}
    </div>
  );
}
