import styles from './MapLegend.module.css';

export const MapLegend = () => {
  return (
    <div className={styles.mapLegendCard}>
      <h2>Legend de la carte</h2>
      <div className={styles.legendItemList}>
        <div className={styles.legendItem}>
          <img
            src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
            alt="marker bleu"
            width={16}
            height={26}
          />
          <p>Arrêt de tram</p>
        </div>
        <div className={styles.legendItem}>
          <img
            src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png"
            alt="marker bleu"
            width={16}
            height={26}
          />
          <p>Arrêt de tram et de bus</p>
        </div>
        <div className={styles.legendItem}>
          <img
            src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
            alt="marker bleu"
            width={16}
            height={26}
          />
          <p>Arrêt de bus</p>
        </div>
      </div>
    </div>
  );
};
