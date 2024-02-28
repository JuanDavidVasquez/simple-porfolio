import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Works from "../components/home/Works";
import Footer from "../layouts/Footer";
import AnimiationIntro from "../components/Animation/AnimiationIntro";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    useEffect(()=>{
        gsap.fromTo('.home', {
            opacity:0,
            ease: "none",
            duration:"1s",
            overwrite: true,
          },{
            opacity:1,
      
          });
    },[])

  useEffect(() => {
    const sections = document.querySelectorAll(".section-js");

    sections.forEach((section, index) => {
      const trigger = section.querySelector(".trigger-js");
      const nextSection = sections[index + 1];

      ScrollTrigger.create({
        trigger: trigger,
        start: "bottom center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(section, {
            y: "0%",
            ease: "none",
            overwrite: true,
          });
          gsap.to(nextSection, {
            y: "-30%",
            ease: "none",
            overwrite: true,
          });
        },
        onLeave: () => {
          gsap.to(section, {
            y: "-100%",
            ease: "none",
            overwrite: true,
          });
        },
        onEnterBack: () => {
          gsap.to(section, {
            y: "0%",
            ease: "none",
            overwrite: true,
          });
          gsap.to(nextSection, {
            y: "-30%",
            ease: "none",
            overwrite: true,
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            y: "0%",
            ease: "none",
            overwrite: true,
          });
          gsap.to(nextSection, {
            y: "30%",
            ease: "none",
            overwrite: true,
          });
        },
      });
    });
  }, []);

  return (
    <div className="home generalScroll">
     <AnimiationIntro/>
      <div className="container-section-js opacity-0">
        <div className="section-js">
          <div className="trigger-js">
            <Intro />
          </div>
        </div>
        <div className="section-js">
          <div className="trigger-js">
            <About />
          </div>
        </div>
        <div className="section-js">
          <div className="trigger-js">
            <Works />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
