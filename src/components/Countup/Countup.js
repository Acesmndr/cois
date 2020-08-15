import React from 'react';
import moment from 'moment';
import './index.scss';
import Timeline from '../Timeline/Timeline';
// import CurrentlyRunning from '../Timeline/CurrentRunning';

const Countup = ({ toDate, crisis }) => {
  const intervalRef = React.useRef(null);
  const [days, setDays] = React.useState(undefined);
  const [hours, setHours] = React.useState(undefined);
  const [minutes, setMinutes] = React.useState(undefined);
  const [seconds, setSeconds] = React.useState(undefined);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      const from = moment(toDate);
      const til = moment();
      const days = til.diff(from, 'days');
      console.log(days, 'asd');
      from.add(days, 'days');
      const hours = til.diff(from, 'hours');
      from.add(hours, 'hours');
      const minutes = til.diff(from, 'minutes');
      from.add(minutes, 'minutes');
      const seconds = til.diff(from, 'seconds');
      setDays(days || '0');
      setHours(hours || '0');
      setMinutes(minutes || '0');
      setSeconds( seconds || '0');
    }, 1000);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    }
  }, [toDate]);
  
  return (
    <div style={{ width: '80vw' }}>
    <a href="https://schedule.dcfandome.com" target="_blank" rel="noopener noreferrer" className="link-right">
      <img className="switch-logo" src={require('../../dcfandome.png')} alt="logo "/>
    </a>
    <div className='countdown-div'>
      <img className="logo" src={require('../../crisis.png')} alt="logo "/>
      <div className='countdown-wrapper'>
        <div className="break spacing-top" />
        {days && (
          <div className='countdown-item'>
                {days} <span>days</span>
            </div>
        )}
        {hours && (
          <div className='countdown-item'>                            
                {hours} <span>hours</span>
            </div>
        )}
        {minutes && (
          <div className='countdown-item'>
                {minutes} <span>minutes</span>
            </div>
        )}
        {seconds && (
          <div className='countdown-item'>
                {seconds} <span>seconds</span>
            </div>
        )}
        <div className="break" />
        <div className="description">
          since Crisis on Inifinite Streams for DCFandome.
          <br/>
          The event has concluded successfully.
        </div>
      </div>
      <h3>August 22, 2020</h3>
      <h1 className="countup-arrow">↓</h1>
    </div>
    <Timeline crisis={crisis} />
    </div>
  )
}

export default Countup;
