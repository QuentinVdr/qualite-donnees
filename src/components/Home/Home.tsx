import { TStop } from '@appTypes/Stop/StopType';
import { getStopInfo } from '@utils/fetchData';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Home.module.css';

function Home() {
  const stopInfo: TStop[] = getStopInfo();
  console.log('🚀 ~ Home ~ stopInfo:', stopInfo);
  const nantesCenter: [number, number] = [47.2184, -1.5536];

  return (
    <MapContainer className={styles.mapContainer} center={nantesCenter} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stopInfo.map((stop) => (
        <Marker key={stop.stop_id} position={[stop.stop_coordinates.lat, stop.stop_coordinates.lon]}>
          <Popup>{stop.stop_name}</Popup>
        </Marker>
      ))}
      <Marker position={nantesCenter}>
        <Popup>Ptdr c'est le centre de Nantes</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Home;
