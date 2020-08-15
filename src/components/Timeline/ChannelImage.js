import React from 'react';

const ChannelImage = ({name, type = 'jpg'}) => {
  return <div className="channel-wrapper"><img src={require(`../../logos/${name}.${type}`)} className='channel-logo' alt={name} /></div>
};

export default ChannelImage;
