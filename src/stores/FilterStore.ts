import { create } from 'zustand';

export enum FilterEnum {
  Tram = 'Tram',
  Bus = 'Bus',
  Ferry = 'Ferry',
  All = 'All'
}

type TFilterStore = {
  filter: FilterEnum;
  setFilter: (filter: FilterEnum) => void;
};

export const useFilterStore = create<TFilterStore>((set) => ({
  filter: FilterEnum.All,
  setFilter: (filter: FilterEnum) => set({ filter })
}));
