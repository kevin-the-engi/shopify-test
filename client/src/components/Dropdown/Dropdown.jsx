import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ engines, getDropdown }) => {
  const handleChange = (e) => {
    getDropdown(e.target.value);
  }

  return(
    <label>
      <select className="dropdown" onChange={handleChange} required>
        <option value=''>Pick engine</option>
        {engines.map(engine => 
          <option key={engine} value={engine}>{engine}</option>
        )}
      </select>
    </label>
  )
}

export default Dropdown;