// Proposed layout for the new frontend design

// Assuming you're using React and the existing map components like GoogleMapScript or MapWithPolyline
// Below is an approach to reorganize the layout to have a full-screen map with a sidebar containing the input fields and button.

/* App.jsx */

import React from 'react';
import './App.css';
import MapWithPolyline from './components/MapWithPolyline'; // Existing map component
import LocationForm from './components/LocationForm'; // Component for input boxes

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Route Planner</h2>
        <LocationForm /> {/* The component for the input fields and button */}
      </div>
      <div className="map-container">
        <MapWithPolyline /> {/* Fullscreen map */}
      </div>
    </div>
  );
}

export default App;

