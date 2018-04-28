import React from 'react';
import ReactDOM from 'react-dom';
// import Vessels from './../vessels/vessels_container';

export default ({ id, containerNumber, vessels, handleSelect }) => {
  console.log(vessels);
  return (
    <div className='container-item'>
      <div className='container-item-id'>
        { id }
      </div>
      <div className='container-item-number'>
        { containerNumber }
      </div>
      <div className='vessels-list'>
        <select onChange={ e => handleSelect(id, e.target.value) }>
          {
            vessels.map( vessel => {
              return (
                <option key={vessel.id} value={vessel.id}>
                  {
                    vessel.name
                  }
                </option>
              );
            })
          }
        </select>
      </div>
    </div>
  );
};