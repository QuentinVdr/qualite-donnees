import { TStop } from '@appTypes/Stop/StopType';
import styles from '@components/Home/Home.module.css';
import { blueIcon, redIcon, violetIcon } from '@components/Markers/Markers';
import { Marker, Popup } from 'react-leaflet';

type MapMarkerProps = {
  stop: TStop;
};

const MapMarker = ({ stop }: MapMarkerProps) => {
  const markerColor = () => {
    if (stop.childs.some((child) => child.type === 0) && stop.childs.some((child) => child.type === 3)) {
      return violetIcon;
    }
    if (stop.childs.some((child) => child.type === 0)) {
      return blueIcon;
    }
    return redIcon;
  };

  return (
    <Marker position={[parseFloat(stop.lat), parseFloat(stop.lon)]} icon={markerColor()}>
      <Popup>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <p>{stop.stop_name}</p>
          <p>Lignes disponibles : </p>

          {stop.childs.map((child) => {
            console.log(child);

            return (
              <div key={child.name} className={styles.alignCenter}>
                <div className={styles.square} style={{ backgroundColor: `#${child.color}` }}>
                  <p
                    style={{
                      color: `#${child.route_text_color}`,
                      textAlign: 'center',
                      margin: 0
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
