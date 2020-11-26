import React from 'react';
import '../css/GoogleMap.css';

const GoogleMap = () => {
  return (
      <div className='map-container'>
        <iframe title='map' className='map' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=P%C3%A4rnu%20maantee%20139.%2011317%20Tallinn,%20Estonia+(Allepal%20O%C3%9C)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
  );
}

export default GoogleMap;
