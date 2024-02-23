import React from "react";

export default function About() {
  return (
    <section className="grid grid-cols-12 gap-1 py-7 justify-center items-center px-5 about">
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

      <div className="latoLight col-start-2">
        About
        <br />
        2024
      </div>
      <div className="col-start-5 col-span-7 latoLight text-2xl">
        a passionate software developer with a specialized focus on creating
        captivating and functional web applications. My goal is to combine
        creativity with functionality to deliver online experiences that are not
        only visually appealing, but also intuitive and efficient. With a
        user-centric approach and meticulous attention to detail, I strive to
        create digital solutions that not only meet, but exceed expectations. I
        am always excited for new challenges and opportunities to expand my
        skills and knowledge in the ever-changing world of web development. I
        look forward to collaborating with you to make your digital ideas a
        reality!
      </div>
      <div className="i_do col-start-5 col-span-3 py-12 flex justify-between">
        <ul className="latoLight text-lg">
          <li className="montserrat text-xl">/ What I do</li>
          <li>Websites</li>
          <li>Apps</li>
          <li>UI/UX Design</li>
          <li>Crms</li>
          <li>Ecomers</li>
        </ul>
        <ul className="latoLight text-lg">
        <li className="montserrat text-xl">/Industria</li>
        <li>Travel</li>
        <li>Corporate</li>
        <li>Recruitment</li>
        <li>BPO</li>
      </ul>
      </div>
    </section>
  );
}
