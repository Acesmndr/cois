import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { createCrisisElements } from './Crisis';

const Timeline = ({crisis}) => (
  <>
    <VerticalTimeline>
      {createCrisisElements(1)}  
    </VerticalTimeline>
  </>
);

export default Timeline;
