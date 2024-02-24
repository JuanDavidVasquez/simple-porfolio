import React, { useRef, useState, useEffect } from "react";
import gsap, { Power3 } from "gsap";

export default function ProjectGallery() {
  const containerGalleryRef = useRef(null);
  const [hoveredText, setHoveredText] = useState("");
  const [maxPosition, setMaxPosition] = useState(900); // Valor predeterminado

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      // Ajustar maxPosition según el ancho de la ventana
      if (windowWidth <= 768) {
        setMaxPosition(1300); // Para dispositivos móviles o pantallas pequeñas
      } else {
        setMaxPosition(900); // Para pantallas más grandes
      }
    }

    // Agregar un listener para manejar el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize() una vez al inicio para configurar el maxPosition inicial
    handleResize();

    const nameProject = document.querySelector(".nameProject");

    gsap.to(nameProject,{
        duration: .5,
        y:-70,
        x: 100,
        ease:Power3
    })

    // Eliminar el listener cuando el componente se desmonte
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

    // Limitar la nueva posición dentro del rango máximo
    newPosition = Math.min(
      0,
      Math.max(
        -maxPosition,
        parseInt(container.style.transform.split("(")[1]) +
          (scrollDirection === "right" ? -imageWidth : imageWidth)
      )
    );

    // Animate the container to the new position
    gsap.to(container, {
      x: newPosition,
      duration: 1, // Duración de la animación
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

    galleryProject.forEach((element, index) => {
        if (index !== clickedIndex) {
            gsap.to(element, {
                y: "100%",
                opacity: 0, 
                duration: 1,
                ease: "power1.in", 
                onComplete: () => {
                    element.style.display = "none"; 
                }
            });
        }
    });

    // Mostrar el elemento actual con una animación suave
    gsap.fromTo(galleryProject[clickedIndex], {
       
        y: "200%"
    }, {
     
        y: 0,
        duration: 1,
        ease: "power1",
        delay: 1 
    });
};

  return (
    <section
      className="project-Gallery w-full col-span-10 col-start-2 overflow-hidden"
      onWheel={handleWheel}
    >
      <span className="text-4xl font-bold montserrat nameProject">{hoveredText}</span>
      <div
        ref={containerGalleryRef}
        className="flex gap-3 px-7 container-gallery-projects"
        style={{ minHeight: "500px", minWidth: "2200px", overflow: "hidden" }}
      >
        <div 
        onClick={detailProject}
        className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/reactjs.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("ReactJS")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div
        onClick={detailProject}
        className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/javascript.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("JavaScript")}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div 
        onClick={detailProject}
        className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/laravel.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("Laravel")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div 
        onClick={detailProject}
        className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/mysql.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("SQL")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
}
