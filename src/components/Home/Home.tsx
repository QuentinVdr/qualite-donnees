import { TStop } from '@appTypes/StopType';
import { MapFilter } from '@components/MapFilter/MapFilter';
import { MapLegend } from '@components/MapLegend/MapLegend';
import MapMarker from '@components/MapMarker/MapMarker';
import { FilterEnum, useFilterStore } from '@stores/FilterStore';
import { getShapes, getStopInfo } from '@utils/fetchData';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import styles from './Home.module.css';

function Home() {
  const stopInfo: TStop[] = getStopInfo();
  const shapesInfos = getShapes();
  const nantesCenter: [number, number] = [47.2184, -1.5536];

  const { filter } = useFilterStore();

  const shapesFiltered = shapesInfos.filter((shape) => {
    if (filter === FilterEnum.Tram && shape.route_type === 0) {
      return true;
    }
    if (filter === FilterEnum.Bus && shape.route_type === 3) {
      return true;
    }
    if (filter === FilterEnum.Ferry && shape.route_type === 4) {
      return true;
    }
    return false;
  });

  return (
    <MapContainer className={styles.mapContainer} center={nantesCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shapesFiltered.map((s) => (
        <Polyline
          key={s.shape_id}
          positions={s.shapes.map((shape) => {
            return { lat: shape.lat, lng: shape.lon };
          })}
          color={`#${s.color}`}
        />
      ))}
      <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
        {stopInfo.map((stop) => {
          return <MapMarker key={stop.stop_id} stop={stop} />;
        })}
      </MarkerClusterGroup>
      <MapFilter />
      <MapLegend />
    </MapContainer>
  );
}

export default Home;
