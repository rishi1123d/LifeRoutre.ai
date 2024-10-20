import { ChakraProvider } from "@chakra-ui/react";
import { Box, HStack } from "@chakra-ui/react";
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
    <ChakraProvider border="2px solid" borderColor="red">
      <Box
        position="fixed" // or use 'absolute' based on your requirement
        top="0"
        left="0"
        right="0"
        bottom="0"
        width="100vw"
        height="100vh"
        bg="white" // Background color
        color="black" // Text color
        display="flex" // Center content (if needed)
        alignItems="center"
        justifyContent="center"
        border="2px solid"
      >
        <HStack
          position="fixed"
          height="100vh"
          weight="100vw"
          top="0"
          bottom="0"
          left="0"
          right="0"
          spacing="24px"
          border="2px solid"
          borderColor="red"
        >
          <LocationForm
            onSubmit={handleFormSubmit}
            border="2px solid"
            borderColor="green"
          />
          {/* <MapIframe /> */}
          <GoogleMap border="2px solid" borderColor="yellow" height="100vh" />
        </HStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
