import { create } from 'zustand';

import { DeparturesResponse } from '../lib/type';

type ExpeditionsStore = DeparturesResponse & {
  isLoading: boolean;
  selectedSort: number;

  setIsLoading: (isLoading: boolean) => void;
  setDepartures: (data: DeparturesResponse) => void;
  setSort: (value: number) => void;
  setSize: (value: number) => void;
  navigateTo: (page: number) => void;
  navigateToPrevious: () => void;
  navigateToNext: () => void;
};

export const useDeparturesStore = create<ExpeditionsStore>((set) => ({
  isLoading: false,

  departures: [],
  currentPage: 1,
  size: 5,
  totalItems: 0,
  totalPages: 0,

  selectedSort: 0,

  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  setDepartures: (data) => {
    set({
      ...data,
      isLoading: false,
    });
  },

  setSort: (val) => {
    set({ currentPage: 1, selectedSort: val });
  },

  setSize: (val) => {
    set({ currentPage: 1, size: val });
  },

  navigateTo: (page: number) => {
    set((state) => ({
      currentPage: Math.min(Math.max(1, page), state.totalPages),
    }));
  },

  navigateToPrevious: () => {
    set((state) => ({ currentPage: Math.max(1, state.currentPage) }));
  },

  navigateToNext: () => {
    set((state) => ({
      currentPage: Math.min(state.totalPages, state.currentPage + 1),
    }));
  },
}));
