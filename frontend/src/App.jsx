import { ChakraProvider } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import "./App.css";
import LocationForm from "./components/LocationForm";
import MapIframe from "./components/RouteMap";
// import PolylineTest from "./components/polylinestuff";
// import SimpleMap from "./components/MapWithPolyline";

function App() {
  const handleFormSubmit = (start, end) => {
    console.log("Start Location:", start);
    console.log("End Location:", end);
  };

  return (
    <ChakraProvider>
      <Box width="100%" height="100%">
        <Heading as="h1">Life Route</Heading>
        <LocationForm onSubmit={handleFormSubmit} />
        <MapIframe />
        {/* <SimpleMap /> */}
        {/* <PolylineTest /> */}
        {/* <MapWithPolyline /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
