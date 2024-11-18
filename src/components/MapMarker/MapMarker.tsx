import { TStop } from '@appTypes/StopType';
import { AccessibleIcon } from '@components/icons/AccessibleIcon';
import { BusIcon } from '@components/icons/BusIcon';
import { ExternalLinkIcon } from '@components/icons/ExternalLinkIcon';
import { FerryIcon } from '@components/icons/FerryIcon';
import { TramIcon } from '@components/icons/TramIcon';
import { blueIcon, greenIcon, orangeIcon, redIcon, violetIcon, yellowIcon } from '@components/Markers/Markers';
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
  const gotFerry = stop.childs.some((child) => child.type === 4);

  if (filter === FilterEnum.Tram && !gotTram) {
    return null;
  }

  if (filter === FilterEnum.Bus && !gotBus) {
    return null;
  }

  if (filter === FilterEnum.Ferry && !gotFerry) {
    return null;
  }

  const markerColor = () => {
    if (gotTram && gotBus && gotFerry) {
      return yellowIcon;
    }

    if (gotTram && gotBus) {
      return orangeIcon;
    }

    if (gotBus && gotFerry) {
      return violetIcon;
    }

    if (gotTram) {
      return greenIcon;
    }

    if (gotBus) {
      return redIcon;
    }

    if (gotFerry) {
      return blueIcon;
    }
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
                  <div
                    className={styles.square}
                    style={{
                      backgroundColor: `#${child.color}`,
                      color: `#${child.route_text_color}`
                    }}
                  >
                    <p>{child.route_short_name}</p>
                  </div>
                  {child.type === 0 && <TramIcon size={28} />}
                  {child.type === 3 && <BusIcon size={28} />}
                  {child.type === 4 && <FerryIcon size={28} />}
                  {child.wheelchair_boarding === '1' && <AccessibleIcon size={28} />}
                </div>
              ))}
          </div>
          <div className={styles.linkContainer}>
            <a
              href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${stop.lat},${stop.lon}`}
              target="_blank"
            >
              <button className={styles.link}>
                <ExternalLinkIcon size={12} /> StreetView
              </button>
            </a>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
