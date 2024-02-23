import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Header from "../layouts/Header";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Works from "../components/home/Works";
import Footer from "../layouts/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
        markers: true,
      });
    });
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="container-section-js">
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
