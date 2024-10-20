import { decode, encode } from "@googlemaps/polyline-codec";
import React, { useState } from "react";

const PolylineTest = () => {
  const sampleCoordinates = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.8044, lng: -122.2711 },
    { lat: 37.6879, lng: -122.4702 },
  ];

  const encodedPolyline =
    "w~fmEv|saOm@?O?s@?{A?Q?qDDE?WBU@OBa@@EDE@EF_@HSBq@L]Fc@L_@JC?MDIB]L[PWNIDMHQJMFw@b@GBe@Vk@ZSTOPIHSVGHSVOPOPQPGJMJg@b@IHKHKFQJ]Xs@n@KJEBEDKHINMXCBKRQXg@`Ao@jAMTe@z@EDc@j@CDEFKPU`@Q\\MZOd@Mf@AFCT?D?D?FAL?D?D?D?F?H@ZBz@@XHV?N?D?J?L?FAL?JAJAF?FAFAFABEVAHGZIVG^CHCPCVALGb@I~@G^CNEPENCHKZWj@INOTSXa@l@Yb@o@bA?@m@|@MTQVOPEFGFIHMJo@f@[RA@AB[T_@VYPe@^]V]VKHC@MJWVCBUTCDY^U^W`@CDSXU\\A@WXABUPQJEDKFKHMHGBWNWLEDEDEBGF";

  const decodedPolyline = decode(encodedPolyline).map((coord) => ({
    lat: coord[0],
    lng: coord[1],
  }));

  return (
    <div>
      <h3>Polyline Encoding and Decoding Example</h3>

      <h4>Original Coordinates:</h4>
      <pre>{JSON.stringify(sampleCoordinates, null, 2)}</pre>

      <h4>Encoded Polyline:</h4>
      <pre>{encodedPolyline}</pre>

      <h4>Decoded Coordinates:</h4>
      <pre>{JSON.stringify(decodedPolyline, null, 2)}</pre>
    </div>
  );
};

export default PolylineTest;
