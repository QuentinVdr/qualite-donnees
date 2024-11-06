import { FilterEnum, useFilterStore } from '@stores/FilterStore';
import styles from './MapFilter.module.css';

export const MapFilter = () => {
  const { filter, setFilter } = useFilterStore();

  return (
    <div className={styles.mapFilterCard}>
      <h2>Filtre</h2>
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            checked={filter === FilterEnum.Tram}
            onClick={() => setFilter(FilterEnum.Tram)}
          />
          <span>Tram</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={filter === FilterEnum.Bus}
            onClick={() => setFilter(FilterEnum.Bus)}
          />
          <span>Bus</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={filter === FilterEnum.Ferry}
            onClick={() => setFilter(FilterEnum.Ferry)}
          />
          <span>Ferry</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={filter === FilterEnum.All}
            onClick={() => setFilter(FilterEnum.All)}
          />
          <span>Tous</span>
        </label>
      </div>
    </div>
  );
};
