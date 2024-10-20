import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import LocationForm from "./components/LocationForm";
import MapIframe from "./components/RouteMap";
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
        <GoogleMap />
      </Box>
    </ChakraProvider>
  );
}

export default App;
