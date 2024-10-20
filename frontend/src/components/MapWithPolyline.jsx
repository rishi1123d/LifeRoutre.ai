import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";

const GoogleMap = ({ encodedPolyline }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        initMap();
      };
    };

    const initMap = () => {
      const myOptions = {
        zoom: 13,
        center: { lat: 33.7490, lng: -84.3880 }, // Default center: Atlanta, Georgia
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      const map = new google.maps.Map(mapRef.current, myOptions);

      // Decode the polyline path
      const decodedPath = google.maps.geometry.encoding.decodePath(encodedPolyline);
      const decodedLevels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

      // Create the polyline and set its options
      const polyline = new google.maps.Polyline({
        path: decodedPath,
        levels: decodedLevels,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map,
      });
    };

    const decodeLevels = (encodedLevelsString) => {
      const decodedLevels = [];
      for (let i = 0; i < encodedLevelsString.length; ++i) {
        decodedLevels.push(encodedLevelsString.charCodeAt(i) - 63);
      }
      return decodedLevels;
    };

    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
        "AIzaSyBAawKtT7nWE1mCyo2PgM6yIt3_UiU5qII"
      )}&libraries=geometry`
    );
  }, [encodedPolyline]);

  return (
    <>
      <Helmet>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
            "AIzaSyBAawKtT7nWE1mCyo2PgM6yIt3_UiU5qII"
          )}&libraries=geometry`}
          async
          defer
        />
      </Helmet>
      <Box ref={mapRef} width="100%" height="400px" />
    </>
  );
};

export default GoogleMap;