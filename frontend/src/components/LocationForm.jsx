import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const LocationForm = ({ onSubmit }) => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startLocation && endLocation) {
      onSubmit(startLocation, endLocation);
      setStartLocation("");
      setEndLocation("");
    } else {
      alert("Both fields are required.");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Stack direction="column" spacing="24px">
        <FormControl>
          <FormLabel htmlFor="startLocation">Starting Location</FormLabel>
          <Input
            id="startLocation"
            name="startLocation"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            placeholder="Enter starting location"
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Ending Location</FormLabel>
          <Input
            id="endLocatoin"
            name="endLocation"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            placeholder="Enter ending location"
            type="text"
          />
        </FormControl>
        <Button colorScheme="blue" type="submit" width="full">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default LocationForm;
