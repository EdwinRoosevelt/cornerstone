import React from "react";
// import 'dotenv/config'
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function PlotMap() {
  const center = { lat: 24.886, lng: -70.268 };

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 42.321, lng: -75.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  const options = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const onLoad = (polygon) => {
    console.log("polygon: ", polygon);
  };

  // console.log(process.env)

  return (
    <LoadScript googleMapsApiKey="as{process.env.GMAP_API_KEY}">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Polygon onLoad={onLoad} paths={paths} options={options} />
      </GoogleMap>
    </LoadScript>
  );
}

export default PlotMap;
