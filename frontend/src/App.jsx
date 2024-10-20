import { ChakraProvider } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import "./App.css";
import LocationForm from "./components/LocationForm";
import MapIframe from "./components/RouteMap";
import initMap from "./components/MapWithPolyline";
import GoogleMapScript from "./components/GoogleMapScript";
import GoogleMap from "./components/MapWithPolyline";

function App() {
  const handleFormSubmit = (start, end) => {
    console.log("Start Location:", start);
    console.log("End Location:", end);
  };

  return (
    <ChakraProvider>
      <Box width="100%" height="100%">
        <LocationForm onSubmit={handleFormSubmit} />
        {/* <MapIframe /> */}
        {/* <GoogleMapScript apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} /> */}
        <GoogleMap />
      </Box>
    </ChakraProvider>
  );
}

export default App;
