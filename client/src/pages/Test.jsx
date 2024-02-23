import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Header from "../layouts/Header";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Works from "../components/home/Works";
import Footer from "../layouts/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-js");

    sections.forEach((section, index) => {
      const trigger = section.querySelector(".trigger-js");
      const nextSection = sections[index + 1];

      ScrollTrigger.create({
        trigger: trigger,
        start: "bottom center",
        end: () => "+=" + section.offsetHeight,
        toggleClass: { targets: section, className: "fixeds" },
        markers: true,
        scrub: 0.5,
        toggleActions: "play none none reverse",
        onEnter: () => {
          if (nextSection) {
            gsap.to(nextSection, { y: 0 });
          }
        },
        onLeave: () => {
          if (nextSection) {
            gsap.to(nextSection, { y: "-100%" });
            section.classList.add("fixeds");
          }
        },
        onEnterBack: () => {
          if (nextSection) {
            gsap.to(nextSection, { y: 0 });
            section.classList.remove("fixeds");
          }
        },
        onLeaveBack: () => {
          if (nextSection) {
            gsap.to(nextSection, { y: "-100%" });
            section.classList.add("fixeds");
          }
        },
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
