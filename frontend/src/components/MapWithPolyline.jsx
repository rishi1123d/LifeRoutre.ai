import React, { useEffect } from "react";

const SimpleMap = () => {
  useEffect(() => {
    // Load the Google Maps script
    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById("googleMaps");

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        }`;
        script.id = "googleMaps";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = initMap; // Call initMap after script loads
      } else {
        initMap();
      }
    };

    const initMap = () => {
      // Create a new map instance
      new window.google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 37.7749, lng: -122.4194 }, // Example center (San Francisco)
      });
    };

    loadGoogleMapsScript(); // Load the Google Maps script
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
};

export default SimpleMap;
