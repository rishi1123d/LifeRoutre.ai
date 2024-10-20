// src/GoogleMap.jsx
import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

// Encoded polyline
// const encodedPolyline =
//   "w~fmEv|saOm@?O?s@?{A?Q?qDDE?WBU@OBa@@EDE@EF_@HSBq@L]Fc@L_@JC?MDIB]L[PWNIDMHQJMFw@b@GBe@Vk@ZSTOPIHSVGHSVOPOPQPGJMJg@b@IHKHKFQJ]Xs@n@KJEBEDKHINMXCBKRQXg@`Ao@jAMTe@z@EDc@j@CDEFKPU`@Q\\MZOd@Mf@AFCT?D?D?FAL?D?D?D?F?H@ZBz@@XHV?N?D?J?L?FAL?JAJAF?FAFAFABEVAHGZIVG^CHCPCVALGb@I~@G^CNEPENCHKZWj@INOTSXa@l@Yb@o@bA?@m@|@MTQVOPEFGFIHMJo@f@[RA@AB[T_@VYPe@^]V]VKHC@MJWVCBUTCDY^U^W`@CDSXU\\A@WXABUPQJEDKFKHMHGBWNWLEDEDEBGF";

const GoogleMap = (encodedPolyline, eta) => {
  const mapRef = useRef(null); // Reference to the map container

  // Function to decode levels
  const decodeLevels = (encodedLevelsString) => {
    const decodedLevels = [];
    for (let i = 0; i < encodedLevelsString.length; ++i) {
      const level = encodedLevelsString.charCodeAt(i) - 63;
      decodedLevels.push(level);
    }
    return decodedLevels;
  };

  useEffect(() => {
    // Wait for the Google Maps script to load
    if (typeof google !== "undefined") {
      // Initialize the map once the component is mounted
      const myLatlng = new google.maps.LatLng(33.7490, -84.3880);
      const myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      const map = new google.maps.Map(mapRef.current, myOptions);

      // Decode the polyline path
      const decodedPath =
        google.maps.geometry.encoding.decodePath(encodedPolyline);
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
    }
  }, []);

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
      {eta && (
        <div>
        <p>Estimated time of arrival: ${eta}</p>
        </div>
      )}
      <Box ref={mapRef} width="100%" height="400px" /> {/* THIS IS WHERE CSS MATTERS */}
    </>
  );
};

export default GoogleMap;
