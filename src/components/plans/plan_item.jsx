import React from 'react';

export default ({ vesselId, containers }) => {
  return (
    <tr className='plans-table-item'>
      <td className='pi-vessel-id'>
        {vesselId}
      </td>
      <td className='pi-containers'>
        {containers.join(", ")}
      </td>
    </tr>
  );
};