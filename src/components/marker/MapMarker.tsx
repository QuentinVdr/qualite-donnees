import { Marker, Popup } from 'react-leaflet';
import styles from '@components/Home/Home.module.css';
import { TStop } from '@appTypes/Stop/StopType';


const MapMarker = ( props: { marker: TStop, infos: TStop[] } ) => {

  const stop = props.marker;

  const findChildren = props.infos.filter( l => l.parent_station === stop.stop_id );
  return (
    <Marker key={ stop.stop_id } position={ [stop.stop_coordinates.lat, stop.stop_coordinates.lon] }>
      <Popup>
        <div>
          <p>{ stop.stop_name }</p>
          <p>Lignes disponibles : </p>

          { findChildren.map( c => {
            console.log( c.wheelchair_boarding );
            return (
              <div className={ styles.alignCenter }>
                <p>{ c.stop_name }</p>
                {
                  c.wheelchair_boarding === '1' && <img className={ styles.handicapIcon }
                                                        src={ 'https://accessibleicon.org/img/Accessibility%20Icon_final.svg' }
                                                        alt={ '' } /> }
              </div>
            );
          } ) }
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
