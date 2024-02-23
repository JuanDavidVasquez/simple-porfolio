import React from "react";

export default function Works() {
  return (
    <section className="grid grid-cols-12 gap-1 justify-center items-center px-5 works h-lvh">
      <h1 className="montserrat font-bold works-h1 col-start-2">Works</h1>
      <div className="flex justify-center align-baseline gap-7 col-start-5 col-span-6">
        <ul className="text-4xl latoLight">
          <li>Mentius S.A.S</li>
          <li>Es Cultura Local 2023</li>
          <li>Adoption</li>
          <li>One Lesson Per Day</li>
        </ul>
        <ul className="text-4xl latoLight">
          <li>Intranet</li>
          <li>Crm's</li>
          <li>Adoption</li>
          <li>Soy Cultura Local</li>
          <li>Chia</li>
          <li>Etiquetas & Marquillas</li>
          <li>One Lesson Per Day</li>
        </ul>
      </div>
    </section>
  );
}
