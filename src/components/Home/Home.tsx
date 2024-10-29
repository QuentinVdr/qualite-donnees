import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Home.module.css';

function Home() {
  const nantesCenter: [number, number] = [47.2184, -1.5536];

  return (
    <MapContainer className={styles.mapContainer} center={nantesCenter} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={nantesCenter}>
        <Popup>Ptdr c'est le centre de Nantes</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Home;
