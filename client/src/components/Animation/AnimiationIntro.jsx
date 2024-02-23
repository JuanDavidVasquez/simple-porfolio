import React, { useEffect } from "react";
import gsap from "gsap";
import "./AnimationCss.css";

export default function AnimationIntro() {
  useEffect(() => {
    const containersectionjs = document.querySelector(".container-section-js");
    gsap.to(containersectionjs,{opacity:0})
    const animateImages = async () => {
      const tl = gsap.timeline();
      const images = document.querySelectorAll(".img-animation-intro");

      await tl.fromTo(
        images,
        {
          duration: 1,
          opacity: 0,
          filter: "blur(10px)",
          ease: "bounce.out",
          stagger: 0.2,
          delay: 0.2,
          x: 0,
          y: 0,
        },
        {
            ease: "expoScale(0.5,7,none)",
          duration: 1,
          opacity: 0.15,
          stagger: 0.2,
          filter: "blur(0px)",
          delay: 0.2,
          x: (index, element) => {
            return index % 2 === 0 ? index * 200 + 1 : index * (-150 - 1);
          },
          y: (index, element) => {
            return index % 2 === 0 ? index * 100 + 10 : index * (-100 - 50);
          },
        }
      ).then(() => {
        const containersectionjs = document.querySelector(".container-section-js");
        const animationIntro = document.querySelector(".animationIntro");

        gsap.fromTo(
          containersectionjs,
          {
            ease: "power2.inOut",
            opacity: 0,
            duration:3,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            filter: "blur(0px)",
          }
        );

        // Agregamos la clase 'homeAffter' al final de la animación
        containersectionjs.classList.add("homeAffter");
        
      });
    };

    animateImages();
  }, []);

  return (
    <div className="animationIntro fixed-animation">
      <div className="container-img-animation-intro">
        <img className="img-animation-intro" src="img/skills/reactjs.png" alt="react" />
        <img className="img-animation-intro" src="img/skills/javascript.png" alt="javascript" />
        <img className="img-animation-intro" src="img/skills/laravel.png" alt="laravel" />
        <img className="img-animation-intro" src="img/skills/mysql.png" alt="mysql" />
      </div>
    </div>
  );
}
