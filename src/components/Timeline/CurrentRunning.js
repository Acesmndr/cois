import React from 'react';
import moment from 'moment';
import { CRISIS_DAY_ONE } from './Crisis';
import './CurrentlyRunning.scss';

const _findCurrentlyRunningSchedule = (schedule) => {
  const currentMoment = moment();
  for (let i = 0; i < schedule.length; i++) {
    if(currentMoment.diff(moment(schedule[i].from), 'seconds') < 0) {
      return Object.assign({ upcoming: true }, schedule[i]);
    }
    if(moment(schedule[i].to || moment(schedule[i].from).add(2, 'hours')).diff(currentMoment, 'seconds') > 0) {
      return schedule[i];
    }
    if(i + 1 < schedule.length && currentMoment.diff(moment(schedule[i].from), 'seconds') < 0) {
      return Object.assign({ upcoming: true }, schedule[i+1]);
    }
  }
  return false;
}

const CurrentlyRunning = ({ crisis }) => {
  const [schedule, setSchedule] = React.useState(null);
  const currentlyRunningRef = React.useRef(null);
  React.useEffect(() => {
    currentlyRunningRef.current = setInterval(() => {
      if(crisis) {
        setSchedule(_findCurrentlyRunningSchedule(CRISIS_DAY_ONE) || { completed: true });
      }
    }, 15000);

    if(crisis) {
      setSchedule(_findCurrentlyRunningSchedule(CRISIS_DAY_ONE) || { completed: true });
    }

    return () => {
      currentlyRunningRef.current && clearInterval(currentlyRunningRef.current);
    }
  }, [crisis]);

  if(!schedule) {
    return null;
  }

  if(schedule.completed === true) {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return <div className={`currently-running ${crisis ? 'crisis' : ''}`}>
    {schedule.image}
    <h2 className="title">{schedule.title}</h2>
    <h4 className="subtitle">{schedule.subtitle}</h4>
    <div className="description">
      {schedule.description}
    </div>
    <a href={crisis ? '/' : 'https://www.youtube.com/channel/UCmbXef0QoqdIfcXUMj_DD7A'} target="_blank" rel="noopener noreferrer" className={ 'streaming-disabled' }>
      {
        schedule.upcoming ?
          <div className="status">Up next</div> :
          <div className="status live">Streaming</div>
      }
    </a>
    <h4 className="timing">{schedule.to ? `${moment(schedule.from).format('MMMM Do, h:mm a')} - ${moment(schedule.to).format('h:mm a')}` : moment(schedule.from).format('MMMM Do, h:mm a')}</h4>
  </div>;
}

export default CurrentlyRunning;
