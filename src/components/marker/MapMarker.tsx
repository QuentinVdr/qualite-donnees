import { Marker, Popup } from 'react-leaflet';
import styles from '@components/Home/Home.module.css';
import { TStop } from '@appTypes/Stop/StopType';

const MapMarker = (props: { marker: TStop; infos: TStop[] }) => {
  const stop = props.marker;
  console.log(stop);
  return (
    <Marker key={stop.stop_id} position={[parseFloat(stop.lat), parseFloat(stop.lon)]}>
      <Popup>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <p>{stop.stop_name}</p>
          <p>Lignes disponibles : </p>

          {stop.childs.map((c) => {
            console.log(c);

            return (
              <div className={styles.alignCenter}>
                <div className={styles.square} style={{ backgroundColor: `#${c.color}` }}>
                  <p
                    style={{
                      color: `#${c.route_text_color}`,
                      textAlign: 'center',
                      margin: 0
                    }}
                  >
                    {c.route_short_name}
                  </p>
                </div>
                {c.wheelchair_boarding === '1' && (
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
