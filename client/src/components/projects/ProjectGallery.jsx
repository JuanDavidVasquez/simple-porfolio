import React, { useRef, useState, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import ProjectDetail from "./ProjectDetail";

export default function ProjectGallery() {
  const containerGalleryRef = useRef(null);
  const [hoveredText, setHoveredText] = useState("");
  const [maxPosition, setMaxPosition] = useState(900);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      urlProject: "adoption/adoption.JPG",
      name:'adoption',
      composicion: `
                     ReactJS
                     Laravel
                     MySql
                     Gsap
                     HTML-CSS
                
                  `,
      resumen: "App consultorio veterinario y Etologíco",
      proyecto: "https://adoptions-client.onelessonperday.com.co/",
    },
    {
      urlProject: "cultura/cultura.JPG",
      name:'Cultura',
      composicion: `
                     HTML-CSS
                     JS Vanilla
                     JSON
                     Gsap                    
                  `,
      resumen: "Landing Page Es Cultura Local-Bogotá 2023",
      proyecto: "https://historys.onelessonperday.com.co/",
    },
    {
      urlProject: "onelessonperday/oneLesson.JPG",
      name:'OneLessonPerDay',
      composicion: `
                     ReactJS
                     NodeJS
                     MongoDB
                     Tailwind
                     HTML-CSS
                
                  `,
      resumen: "App consultorio veterinario y Etológico",
      proyecto: "https://onelessonperday.com.co/",
    },
    {
      urlProject: "innclod/innclod.JPG",
      name: "innclod",
      composicion:  `
                      ReactJS
                      Laravel Passport
                      MySql
                      Material UI
                      HTML-CSS
                  `,
      resumen: "Test innclod",
      proyecto: "https://innclod.onelessonperday.com.co/",
    },
    {
      urlProject: "/profolio20241.JPG",
      name: "Portfolio 2024-1",
      composicion:  `
                      ReactJS
                      GSAP
                      HTML-CSS
                  `,
      resumen: "Portfolio",
      proyecto: "https://portfolio.onelessonperday.com.co/",
    },
  ]);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        setMaxPosition(1300);
      } else {
        setMaxPosition(900);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    const nameProject = document.querySelector(".nameProject");

    gsap.to(nameProject,{
        duration: .5,
        y:-70,
        x: 100,
        ease: Power3
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleWheel = debounce((event) => {
    const currentScroll = event.deltaY;
    const scrollDirection = currentScroll > 0 ? "right" : "left";
    moveImages(scrollDirection);
  }, 100);

  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const moveImages = (scrollDirection) => {
    const container = containerGalleryRef.current;
    const imageWidth = container.firstChild.offsetWidth + 20;

    let newPosition = "+=" + imageWidth;
    if (scrollDirection === "right") {
      newPosition = "-=" + imageWidth;
    }

    newPosition = Math.min(
      0,
      Math.max(
        -maxPosition,
        parseInt(container.style.transform.split("(")[1]) +
          (scrollDirection === "right" ? -imageWidth : imageWidth)
      )
    );

    gsap.to(container, {
      x: newPosition,
      duration: 1,
    });
  };

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText("");
  };

  const detailProject = (e) => {
    let galleryProject = document.querySelectorAll('.img-animation-gallery');
    let clickedIndex = Array.from(galleryProject).indexOf(e.currentTarget);
    const selectedProjectDetails = projects[clickedIndex];
    const { name, composicion, resumen } = selectedProjectDetails;

    setSelectedProject(name);

    galleryProject.forEach((element, index) => {
      if (index !== clickedIndex) {
          gsap.to(element, {
              y: "100%",
              duration: 1,
              ease: "power1.in", 
              onComplete: () => {
                  element.style.display = "none";
              }
          });
      }
    });

    gsap.fromTo(galleryProject[clickedIndex], {
      y: "200%"
    }, {
      y: 0,
      duration: 1,
      ease: "power1",
      delay: 1,
      height: "600px"
    });
  };

  const resetAnimation = () => {
    let galleryProject = document.querySelectorAll('.img-animation-gallery');
    const detailGalleryProject = document.querySelector('.detailGalleryProject');
    const nameProject = document.querySelector('.nameProject');
    const resetButton = document.querySelector('.resetAnimation');
    gsap.to(resetButton,{opacity:0})
    gsap.to(nameProject,{opacity:1})
    gsap.to(detailGalleryProject,{opacity:0, zIndex:-1});

    galleryProject.forEach((element) => {
      element.style.display = "grid";
      gsap.to(element, {
        y: 0,
        duration: 1,
        ease: "power1",
        height: "auto"
      });
    });
  };

  const [expand, setExpand] = useState(false);
  const handleMouseEnters = () => {
    setExpand(true);
  };

  const handleMouseLeaves = () => {
    setExpand(false);
  };

  return (
    <section className="project-Gallery w-full col-span-10 col-start-2 overflow-hidden" onWheel={handleWheel}>
      <span className="text-4xl font-bold montserrat nameProject">{hoveredText}</span>

      <div className="w-full text-center">

        <button onClick={resetAnimation} 
        className="link-container resetAnimation"
        onMouseEnter={handleMouseEnters}
        onMouseLeave={handleMouseLeaves}
        >
        Gallery Projects
        <div className={`line js-line ${expand ? "expand" : ""}`}></div>
        </button>
      
      </div>
 
     



      <div ref={containerGalleryRef} className="flex gap-3 px-7 container-gallery-projects" style={{ minHeight: "500px", minWidth: "2200px", overflow: "hidden" }}>
        {projects.map((project, index) => (
          <div key={index} onClick={detailProject} className="img-animation-gallery rounded-3xl overflow-hidden">
            <img
              className="imges-animation-gallery"
              src={`img/projects/${project.urlProject}`}
              alt={project.name}
              onMouseEnter={() => handleMouseEnter(project.name)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
      <div className="details-projects">
      <ProjectDetail
      selectedProject={selectedProject}
      composicion={selectedProject && projects.find(project => project.name === selectedProject)?.composicion}
      resumen={selectedProject && projects.find(project => project.name === selectedProject)?.resumen}
      proyecto={selectedProject && projects.find(project => project.name === selectedProject)?.proyecto}
    />
    
      </div>
     
    </section>
  );
}
