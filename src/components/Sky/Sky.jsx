import React from 'react';

import './sky.scss';
import SkySVG from './../../img/sky.svg';


function Sky() {
  return (
    <div className="Sky">
      <img src={SkySVG} alt="Sky" />
    </div>
  );
}

export default Sky;
