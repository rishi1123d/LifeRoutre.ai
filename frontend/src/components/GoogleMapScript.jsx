import { Helmet } from "react-helmet";

const GoogleMapScript = ({ apiKey }) => {
  return (
    <Helmet>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry`}
        async
        defer
      ></script>
    </Helmet>
  );
};

export default GoogleMapScript;
