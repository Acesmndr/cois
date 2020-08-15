import React from 'react';
import moment from 'moment';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';


const TimelineElement = ({
  id,
  from,
  to,
  title,
  link,
  subtitle,
  description,
  crisis,
  image,
}) => (
  <VerticalTimelineElement
      key={id}
      className="vertical-timeline-element--work"
      contentStyle= {{ backgroundColor: '#5b6467',
        backgroundImage: 'linear-gradient(315deg, #062247 0%, rgb(46 96 140) 74%)', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid rgb(41 88 131)' }}
      date={to ? `${moment(from).format('MMMM Do, h:mm a')} - ${moment(to).format('h:mm a')}` : moment(from).format('MMMM Do, h:mm a') }
      iconStyle={{ backgroundColor: 'rgb(8 35 70)', backgroundSize: 'fit', color: '#fff' }}
      icon={<img className="event-logo" src={require('../../crisislogo.jpg')} alt="product" />}
    >
      {image}
      <h3 className="vertical-timeline-element-title">{link ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}</h3>
      {subtitle ? <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4> : null}
      <div className="vertical-timeline-element-description">
        {description}
      </div>
    </VerticalTimelineElement>
);

export default TimelineElement;
