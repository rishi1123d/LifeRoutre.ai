import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
      <h1>LifeRoute</h1>
      <LocationForm onSubmit={handleFormSubmit} />
    </ChakraProvider>
  );
}

export default App;
