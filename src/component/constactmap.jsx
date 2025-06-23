// src/components/ContactMap.jsx
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// // Fix for default marker icons in Vite
// import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import markerShadow from 'leaflet/dist/images/marker-shadow.png'
("Saample UI : https://dribbble.com/shots/21191199-Paysphere-Contact-dark");

const ContactMap = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([11.0168, 76.9558], 13);
    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Fix default marker
    const defaultIcon = L.icon({
      //   iconUrl: markerIcon,
      //   shadowUrl: markerShadow,
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Add marker
    markerRef.current = L.marker([11.0168, 76.9558], { icon: defaultIcon })
      .addTo(map)
      .bindPopup("<b>Our Office</b><br>123 Main Street, Coimbatore")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="contact-map-container lg:!p-0 md:!p-3 !p-5">
      <h2 className="text-[#9e9e9e] font-syne lg:text-4xl sm:text-3xl">
        Find Us Here
      </h2>
      <div
        ref={mapRef}
        className="contact-map"
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

export default ContactMap;
