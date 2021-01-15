import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useStyles from "./styles";
import LocationMarker from "./locationMarker";

const Map = () => {
  const classes = useStyles();
  const position: [number, number] = [-34.6037, -58.3816];
  return (
    <MapContainer
      className={classes.map}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/finicafferata/ckjwu7kn613pj17ppv9aqyf9e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmluaWNhZmZlcmF0YSIsImEiOiJja2p3dXZnYXgxNGkxMnFwMzlsd2lrbDJlIn0.hvQee-ZG5x04knRi05tVOQ`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={position}>
        <Popup>
          We are from <b>Buenos Aires, Argentina</b>. <br /> Hope you can visit
          us sometime!
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
