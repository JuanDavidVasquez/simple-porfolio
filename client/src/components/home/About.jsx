import React from "react";

export default function About() {
  return (
    <section className="grid grid-cols-12 gap-1 h-lvh justify-center items-center px-5 about section-js">
      <div className="latoLight col-start-2 work-link flex justify-center items-center text-white montserrat text-4xl font-bold">
        Work
      </div>
      <div className="col-start-5 col-span-8  montserrat about-content border-b-2 py-7">
        <h1 className="montserrat font-bold about-h1">
          I'm Juan David, a freelance Software Developer.
        </h1>
        <p className="text-3xl parrafo">
        Inquiries / ONELESSONPERDAY@ONELESSONPERDAY.COM
        </p>
      </div>

     <div className="latoLight col-start-2">About<br/>2024</div>
     <div className="col-start-4 col-span-8">s</div>
    </section>
  );
}
