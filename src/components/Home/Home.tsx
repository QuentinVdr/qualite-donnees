import { TStop } from '@appTypes/Stop/StopType';
import { getStopInfo } from '@utils/fetchData';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Home.module.css';
import L from 'leaflet';

function Home() {
  const stopInfo: TStop[] = getStopInfo();
  const nantesCenter: [number, number] = [47.2184, -1.5536];

  return (
    <MapContainer className={styles.mapContainer} center={nantesCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stopInfo
        .filter((stop) => stop.parent_station === null)
        .map((stop) => {

          const findChildren = stopInfo.filter(l => l.parent_station === stop.stop_id);


          return (
            (
              <Marker key={stop.stop_id} position={[stop.stop_coordinates.lat, stop.stop_coordinates.lon]}>
                <Popup >
                  <div>
                    <p>{ stop.stop_name }</p>
                    <p>Lignes disponibles : </p>

                      {findChildren.map(c => {
                        console.log( c.wheelchair_boarding );
                        return (
                          <div className={ styles.alignCenter }>
                            <p>{ c.stop_name }</p>
                            {
                              c.wheelchair_boarding === "1" && <img className={ styles.handicapIcon }
                                                            src={ 'https://accessibleicon.org/img/Accessibility%20Icon_final.svg' }
                                                            alt={ '' } /> }
                          </div>


                        )
                      })}

                  </div>


                </Popup>
              </Marker>
        )
        )
        } ) }
    </MapContainer>
  );
}

export default Home;
