// Proposed layout for the new frontend design

// Assuming you're using React and the existing map components like GoogleMapScript or MapWithPolyline
// Below is an approach to reorganize the layout to have a full-screen map with a sidebar containing the input fields and button.

/* App.jsx */

import React from 'react';
import './App.css';
import MapWithPolyline from './components/MapWithPolyline'; // Existing map component
import LocationForm from './components/LocationForm'; // Component for input boxes

function App() {
  const [encodedPolyline, setEncodedPolyline] = useState("");
  const [eta, setEta] = useState("");

  const handleFormSubmit = (startLocation, endLocation) => {
    fetch(
      `http://localhost:3000/bestpath?origin=${encodeURIComponent(
        startLocation
      )}&destination=${encodeURIComponent(endLocation)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setEncodedPolyline(data['polyline']);
        setEta(data['duration']);
      })
      .catch((error) => {
        console.error("Error fetching route:", error);
      });
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Route Planner</h2>
        <LocationForm onSubmit={handleFormSubmit}/> {/* The component for the input fields and button */}
      </div>
      <div className="map-container">
        <MapWithPolyline encodedPolyline={encodedPolyline} eta={eta}/> {/* Fullscreen map */}
      </div>
    </div>
  );
}

export default App;

