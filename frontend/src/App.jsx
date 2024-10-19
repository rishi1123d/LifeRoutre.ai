import { ChakraProvider } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import "./App.css";
import LocationForm from "./components/LocationForm";

function App() {
  const handleFormSubmit = (start, end) => {
    console.log("Start Location:", start);
    console.log("End Location:", end);

    //API call
  };

  return (
    <ChakraProvider>
      <Box width="100vh" height="100vh">
        <Heading as="h1">Life Route</Heading>
        <LocationForm onSubmit={handleFormSubmit} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
