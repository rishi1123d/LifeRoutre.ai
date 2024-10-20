import React, { useEffect, useRef, useState } from "react";
import { Box, Input, Select, Button } from "@chakra-ui/react";

const MapWithDirections = () => {
  const mapRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const directionsServiceRef = useRef(null);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [mode, setMode] = useState("DRIVING"); // Default travel mode

  useEffect(() => {
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
    directionsServiceRef.current = new window.google.maps.DirectionsService();

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }, // Default center (e.g., Chicago)
      disableDefaultUI: true,
    });

    directionsRendererRef.current.setMap(map);
  }, []);

  const calculateAndDisplayRoute = () => {
    const directionsService = directionsServiceRef.current;

    directionsService
      .route({
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode[mode],
      })
      .then((response) => {
        directionsRendererRef.current.setDirections(response);
      })
      .catch((e) => {
        window.alert("Directions request failed due to " + e);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAndDisplayRoute();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Starting Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          mb={4}
        />
        <Input
          placeholder="Ending Location"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          mb={4}
        />
        <Select value={mode} onChange={(e) => setMode(e.target.value)} mb={4}>
          <option value="DRIVING">Driving</option>
          <option value="BICYCLING">Bicycling</option>
          <option value="TRANSIT">Transit</option>
          <option value="WALKING">Walking</option>
        </Select>
        <Button type="submit" colorScheme="teal">
          Show Route
        </Button>
      </form>
      <div ref={mapRef} style={{ height: "500px", width: "100%" }} />
    </Box>
  );
};

export default MapWithDirections;
