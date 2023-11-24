import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

var redIcon = L.icon({
	iconUrl: "marker.png",
	shadowUrl: "markersd.png",

	iconSize: [38, 95], // size of the icon
	shadowSize: [50, 64], // size of the shadow
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62], // the same for the shadow
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const Map = () => {
	// Replace these with your company's latitude and longitude
	const companyLatLng = [33.516961, 51.914394];

	return (
		<MapContainer
			center={companyLatLng}
			zoom={12}
			style={{ height: "50vh", width: "100%", zIndex: 0, borderRadius: "30px" }}
		>
			<TileLayer
				attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={companyLatLng} icon={redIcon}>
				<Popup>Your Company</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
