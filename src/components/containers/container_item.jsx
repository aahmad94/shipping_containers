import React from 'react';
import ReactDOM from 'react-dom';
// import Vessels from './../vessels/vessels_container';

export default ({ id, containerNumber, vessels, handleSelect }) => {
  return (
    <tr className='containers-table-item'>
      <td className='container-item-id'>
        { id }
      </td>
      <td className='container-item-number'>
        { containerNumber }
      </td>
      <td className='container-item-vessels'>
        <select onChange={ e => handleSelect(id, e.target.value) }>
          <option defaultvalue="" hidden>Select vessel</option>
          {
            vessels.map( vessel => {
              return (
                <option 
                  key={vessel.id}
                  value={vessel.id}>
                  {
                    vessel.name
                  }
                </option>
              );
            })
          }
        </select>
      </td>
    </tr>
  );
};