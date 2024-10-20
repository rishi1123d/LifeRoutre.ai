import React from "react";

const MapIframe = () => {
  return (
    <iframe
      src="https://storage.googleapis.com/maps-solutions-ngrbplp6tl/commutes/kszc/commutes.html"
      width="100%"
      height="500px" // You can change the height as needed
      style={{ border: 0 }}
      loading="lazy"
      title="Google Maps Commutes"
    />
  );
};

export default MapIframe;
