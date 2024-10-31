import { TStop } from '@appTypes/Stop/StopType';
import { getShapes, getStopInfo } from '@utils/fetchData';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import styles from './Home.module.css';
import React from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
import MapMarker from '@components/marker/MapMarker';

function Home() {
  const stopInfo: TStop[] = getStopInfo();
  const shapesInfos = getShapes();
  const nantesCenter: [number, number] = [47.2184, -1.5536];

  return (
    <MapContainer className={styles.mapContainer} center={nantesCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shapesInfos.map((s) => {
        return (
          <Polyline
            positions={s.shapes.map((shape) => {
              return { lat: shape.lat, lng: shape.lon };
            })}
            color={`#${s.color}`}
          />
        );
      })}
      <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
        {stopInfo.map((stop) => {
          return <MapMarker key={stop.stop_id} stop={stop} />;
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Home;
