import React, { useRef, useState } from "react";
import gsap from "gsap";

export default function ProjectGallery() {
  const containerGalleryRef = useRef(null);
  const [hoveredText, setHoveredText] = useState("");

  const handleWheel = (event) => {
    const currentScroll = event.deltaY;
    const scrollDirection = currentScroll > 0 ? "right" : "left";
    moveImages(scrollDirection);
    event.preventDefault(); // Prevenir el comportamiento de scroll predeterminado
  };

  const moveImages = (scrollDirection) => {
    const container = containerGalleryRef.current;
    const imageWidth = container.firstChild.offsetWidth + 20; // 20px gap between images
    const maxPosition = 900;

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

  return (
    <section
      className="project-Gallery w-full col-span-10 col-start-2 overflow-hidden"
      onWheel={handleWheel}
    >
      <span>{hoveredText}</span>
      <div
        ref={containerGalleryRef}
        className="flex gap-10 px-7 container-gallery-projects"
        style={{ minHeight: "500px", minWidth: "2200px", overflow: "hidden" }}
      >
        <div className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/reactjs.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("ReactJS")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/javascript.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("JavaScript")}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="img-animation-gallery">
          <img
            className="imges-animation-gallery"
            src="img/skills/laravel.png"
            alt="react"
            onMouseEnter={() => handleMouseEnter("Laravel")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="img-animation-gallery">
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
