import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <div className='w-full py-20 bg-black bg-opacity-70 text-white'>
      <h1 className='montserrat text-9xl text-center pb-10 title-experience'>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2020"
          iconStyle={{background: 'url("img/icons/iconReact.png")', backgroundSize: "cover" }}
        >
          <h3 className="vertical-timeline-element-title">CRM - Website</h3>
          <p>CRM creation and administration for collection companies.</p>
          <p>Website Freelance</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2021"
          iconStyle={{background: 'url("img/icons/iconJS.gif")', backgroundSize: "cover", backgroundPosition:"center" }}
        >
          <h3 className="vertical-timeline-element-title">CRM</h3>
          <p>CRM creation and administration for Vanti allies.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2022"
          iconStyle={{background: 'url("img/icons/iconLaravel.png")', backgroundSize: "cover" }}
        >
          <h3 className="vertical-timeline-element-title">CRM - Inclod - AppTask</h3>
          <p>CRM creation and administration for Claro and Telefonica BPO allies - Movistar.</p>
          <p>App in charge of managing a document management system</p>
          <p>System responsible for creating projects and assigning tasks to project collaborators</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2023"
          iconStyle={{background: 'url("img/icons/iconJava.gif")', backgroundSize: "cover" }}
        >
          <h3 className="vertical-timeline-element-title">Intranet - Coffe - Soy Cultura Local - App Adoption</h3>
          <p>Intranet: Creation and implementation of the Auth and Time Manager modules.</p>
          <p>Coffee: Creation and implementation of the coffee shop sales application</p>
          <p>Landing page creation I am local culture Bogotá 2023</p>
          <p>Canine and feline adoption system</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2024"
          iconStyle={{background: 'url("img/icons/iconMysql.png")', backgroundSize: "cover" }}
        >
          <h3 className="vertical-timeline-element-title">Intranet</h3>
          <p>Modules: <br/>RRHH, Cosecha, App-Salidas</p>
          <p>
            Creation of the HHRR module, app to administer and manage the selection and hiring process.
            Cration module harvests, administers and manages processes related to payments from allies
            Creation of an exit module, which manages the flow of personnel who present something new and leave or enter outside their usual hours.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
