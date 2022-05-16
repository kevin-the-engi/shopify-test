import React from 'react';

const Dropdown = ({ engines }) => {
  return(
    <label>
      Pick engine:
      <select>
        {engines.map(engine => 
          <option value={engine}>{engine}</option>
        )}
      </select>
    </label>
  )
}

export default Dropdown;