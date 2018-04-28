import React from 'react';
import ReactDOM from 'react-dom';

export default ({ id, name }) => {
  return (
    <div className='vessel-item'>
      <div className='vessel-item-id'>
        {id}
      </div>
      <div className='vessel-item-number'>
        {name}
      </div>
    </div>
  );
};