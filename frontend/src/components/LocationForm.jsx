import React, { useState } from "react";

const LocationForm = ({ onSubmit }) => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startLocation && endLocation) {
      onSubmit(startLocation, endLocation); // Pass locations back to parent
    } else {
      alert("Both fields are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="startLocation">Starting Location</label>
        <input
          type="text"
          id="startLocation"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endLocation">Ending Location</label>
        <input
          type="text"
          id="endLocation"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationForm;
