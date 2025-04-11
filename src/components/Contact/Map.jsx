import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const Icon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  iconSize: [32, 48],
});

const position = [43.47, -80.54];

function Map() {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <MapContainer 
        center={position} 
        zoom={13}
        scrollWheelZoom={false}
        whenCreated={(map) => {
          mapRef.current = map;
          setTimeout(() => map.invalidateSize(), 100);
        }}
        className="rounded-lg w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">Carto</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={Icon}>
          <Popup>
            I am currently based in 
            <br/>University of Waterloo, ON, Canada.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
