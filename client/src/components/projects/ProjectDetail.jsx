import React, { useEffect } from "react";
import gsap from "gsap";

export default function ProjectDetail({
  selectedProject,
  composicion,
  resumen,
}) {

  useEffect(()=>{
    console.log(selectedProject)
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
    gsap.to(resetButton,{opacity:1})
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

   

  },[selectedProject])


  return (
    <div className="absolute top-1/3 right-1/3 detailGalleryProject">
      {selectedProject && (
        <div>
          <h1 className="montserrat col-start-4 col-span-5 py-1 project-title">
            {selectedProject}
          </h1>
          <p className="montserrat w-1/4">
            <span className="latoLight text-2xl font-bold">Composición:</span>{" "}
            {composicion}
          </p>
          <p>Resumen: {resumen}</p>
        </div>
      )}
    </div>
  );
}
