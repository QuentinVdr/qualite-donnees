import { TStop } from '@appTypes/Stop/StopType';
import styles from '@components/Home/Home.module.css';
import { blueIcon, redIcon, violetIcon } from '@components/Markers/Markers';
import { FilterEnum, useFilterStore } from '@stores/FilterStore';
import { Marker, Popup } from 'react-leaflet';

type MapMarkerProps = {
  stop: TStop;
};

const MapMarker = ({ stop }: MapMarkerProps) => {
  const { filter } = useFilterStore();

  const gotTram = stop.childs.some((child) => child.type === 0);
  const gotBus = stop.childs.some((child) => child.type === 3);

  if (filter === FilterEnum.Tram) {
    if (gotTram) {
      stop.childs = stop.childs.filter((child) => child.type === 0);
    } else {
      return null;
    }
  }

  if (filter === FilterEnum.Bus) {
    if (gotBus) {
      stop.childs = stop.childs.filter((child) => child.type === 3);
    } else {
      return null;
    }
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <h3>{stop.stop_name}</h3>
          <p>Lignes disponibles : </p>

          {stop.childs.map((child) => {
            return (
              <div key={child.name} className={styles.alignCenter}>
                <div className={styles.square} style={{ backgroundColor: `#${child.color}` }}>
                  <p
                    style={{
                      color: `#${child.route_text_color}`,
                      textAlign: 'center'
                    }}
                  >
                    {child.route_short_name}
                  </p>
                </div>
                {child.wheelchair_boarding === '1' && (
                  <img
                    className={styles.handicapIcon}
                    src={'https://accessibleicon.org/img/Accessibility%20Icon_final.svg'}
                    alt={''}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
