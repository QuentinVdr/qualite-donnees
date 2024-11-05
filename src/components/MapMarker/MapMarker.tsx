import { TStop } from '@appTypes/StopType';
import { blueIcon, redIcon, violetIcon } from '@components/Markers/Markers';
import { FilterEnum, useFilterStore } from '@stores/FilterStore';
import { Marker, Popup } from 'react-leaflet';
import styles from './Mapmarker.module.css';

type MapMarkerProps = {
  stop: TStop;
};

const MapMarker = ({ stop }: MapMarkerProps) => {
  const { filter } = useFilterStore();

  const gotTram = stop.childs.some((child) => child.type === 0);
  const gotBus = stop.childs.some((child) => child.type === 3);

  if (filter === FilterEnum.Tram && !gotTram) {
    return null;
  }

  if (filter === FilterEnum.Bus && !gotBus) {
    return null;
  }

  const markerColor = () => {
    if (gotTram && !gotBus) {
      return blueIcon;
    }
    if (gotBus && !gotTram) {
      return redIcon;
    }
    return violetIcon;
  };

  return (
    <Marker position={[parseFloat(stop.lat), parseFloat(stop.lon)]} icon={markerColor()}>
      <Popup>
        <div className={styles.markerPopup}>
          <h2>{stop.stop_name}</h2>
          <p className={styles.description}>Lignes disponibles : </p>
          <div className={styles.childrenList}>
            {stop.childs
              .toSorted((a, b) => a.route_short_name.localeCompare(b.route_short_name))
              .toSorted((a, b) => a.type - b.type)
              .map((child) => (
                <div key={`${child.name}-${child.route_short_name}`} className={styles.alignCenter}>
                  <p
                    className={styles.square}
                    style={{
                      backgroundColor: `#${child.color}`,
                      color: `#${child.route_text_color}`
                    }}
                  >
                    {child.route_short_name}
                  </p>
                  {child.wheelchair_boarding === '1' && (
                    <img
                      className={styles.handicapIcon}
                      src={'https://accessibleicon.org/img/Accessibility%20Icon_final.svg'}
                      alt="Accessible"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
