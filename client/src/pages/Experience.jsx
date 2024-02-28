import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <div className='w-full py-20 bg-black bg-opacity-80 text-white'>
      <h1 className='montserrat text-9xl text-center'>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Event 1</h3>
          <p>Some information about the event in 2020.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Event 2</h3>
          <p>Some information about the event in 2021.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Event 3</h3>
          <p>Some information about the event in 2022.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Event 4</h3>
          <p>Some information about the event in 2023.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-gray-500"
          date="2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Event 5</h3>
          <p>Some information about the event in 2024.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
