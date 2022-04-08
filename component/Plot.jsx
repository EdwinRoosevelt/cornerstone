import React from "react";
import { useEffect } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

function Plot() {
  const center = { lat: 32.321, lng: -64.757 };

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  const options = {
    fillColor: "lightblue",
    fillOpacity: 0.5,
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

  return (
    <LoadScript googleMapsApiKey="AIzaSyA00OVCytOS2w9Zl3K7uZZFGAYUPJqXVVQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
        <Polygon onLoad={onLoad} paths={paths} options={options} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Plot;
