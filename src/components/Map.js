import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = ({ properties, onPropertySelect }) => {
  return (
    <MapContainer 
      center={[44.8125, 20.4612]} 
      zoom={13} 
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {properties.map(property => (
        <Marker 
          key={property.id}
          position={[property.lat, property.lng]}
          eventHandlers={{
            click: () => onPropertySelect(property),
          }}
        >
          <Tooltip permanent direction="top" offset={[0, -20]}>
            {property.price}€
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;