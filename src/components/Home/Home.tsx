import { TStop } from '@appTypes/Stop/StopType';
import { getStopInfo } from '@utils/fetchData';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Home.module.css';
import MapMarker from '@components/marker/MapMarker';
import MarkerClusterGroup from 'react-leaflet-cluster';

function Home() {
  const stopInfo: TStop[] = getStopInfo();
  const nantesCenter: [number, number] = [47.2184, -1.5536];

  return (
    <MapContainer className={styles.mapContainer} center={nantesCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
        {stopInfo.map((stop) => {
          return <MapMarker marker={stop} infos={stopInfo} />;
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Home;
