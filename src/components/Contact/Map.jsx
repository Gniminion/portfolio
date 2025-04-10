import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const Icon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
});


const position = [43.47, -80.54];

function Map() {
  return (
    <MapContainer 
      center={position} 
      zoom={5} 
      scrollWheelZoom={false} 
      style={{ height: "100%", width: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">Carto</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={Icon}>
        <Popup>
          I am currently based in University of Waterloo, ON, Canada.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;
