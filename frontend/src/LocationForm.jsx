/* LocationForm.jsx */

import React, { useState } from 'react';
import 'App.css';

function LocationForm() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Start:', startLocation, 'End:', endLocation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="startLocation">Start Location</label>
        <input
          type="text"
          id="startLocation"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="endLocation">End Location</label>
        <input
          type="text"
          id="endLocation"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
        />
      </div>
      <button type="submit">Get Route</button>
    </form>
  );
}

export default LocationForm;
