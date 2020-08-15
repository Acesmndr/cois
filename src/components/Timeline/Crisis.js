import React from 'react';
import TimelineElement from './TimelineElement';
import ChannelImage from './ChannelImage';

const CRISIS_DAY_ONE = [{
  from: 'Sat, 22 Aug 2020 07:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 09:00:00 GMT-0400',
  title: 'Subjective Reviews',
  subtitle: 'Featuring: Scott Fowler, Prime_76 and Mr. West Ashely',
  image: <>
    <ChannelImage name='SubjectiveReviews' type='png' />
  </>
},{
  from: 'Sat, 22 Aug 2020 09:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 11:00:00 GMT-0400',
  title: 'Film Gob',
  subtitle: 'Featuring: Syl Abdul Inc, Lady Jenevia and LightCast',
  image: <>
    <div>
      <ChannelImage name='FilmGob' />
    </div>
  </>
}, {
  from: 'Sat, 22 Aug 2020 11:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 12:45:00 GMT-0400',
  title: 'Fatal Jay show',
  subtitle: 'Featuring: Fanaddict of film and Skeletor',
  image: <>
    <ChannelImage name='FatalJay' />
  </>
}, {
  from: 'Sat, 22 Aug 2020 13:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 15:00:00 GMT-0400',
  title: 'DC FANDOME WATCH PARTY',
  subtitle: 'Featuring: Strong Arm flix, Subjective Reviews, Sylabdul Inc, Zeeverfett, Zod Writer, Nerdy in Many Ways, Nickatina, Fatal Jay, The WatchTower Jeffery Warfield, KuziCast and More!!',
  image: <>
    <div>
      <ChannelImage name='NickatinaShow' type='png' />
    </div>
  </>,
  description: 'Hosted by: The Nickatina Show'
}, {
  from: 'Sat, 22 Aug 2020 15:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 17:00:00 GMT-0400',
  title: 'Zeeverfet',
  image: <>
    <ChannelImage name='Zeeverfet' />
  </>,
}, {
  from: 'Sat, 22 Aug 2020 17:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 18:00:00 GMT-0400',
  title: 'Nerdy In Many Ways',
  image: <>
    <ChannelImage name='NerdyInManyWays' type='png' />
  </>,
  description: 'Until the end of hall of hero\'s panel'
}, {
  from: 'Sat, 22 Aug 2020 18:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 20:00:00 GMT-0400',
  title: '4Nerds',
  image: <>
    <ChannelImage name='4Nerds' type='png' />
  </>
}, {
  from: 'Sat, 22 Aug 2020 20:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 22:00:00 GMT-0400',
  title: 'Poindexter Lounge',
  image: <>
    <ChannelImage name='PoindexterLounge' />
  </>
}, {
  from: 'Sat, 22 Aug 2020 22:00:00 GMT-0400',
  to: 'Sat, 22 Aug 2020 24:00:00 GMT-0400',
  title: 'Mad Max Mandalorian',
  subtitle: 'Featuring: Brian Hill (master of None)',
  image: <>
    <ChannelImage name='MadMaxMandalorian' />
  </>
}];

const createCrisisElements = () => {
  const eventData = CRISIS_DAY_ONE;
  return eventData.map((d, i) => (<TimelineElement crisis={true} {...d} key={`event-${i}`} />));
}

export {
  CRISIS_DAY_ONE,
  createCrisisElements,
};
