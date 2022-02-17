
import create, { GetState, State } from "zustand"
import { persist } from "zustand/middleware"

interface PersistedLocalStorageState  {
  searchHistory : Array<string>, 
  pushSearchHistory: (searchTerm : string) => any
} 
// export data to an Inmemory store, rehydrated from localStore

export const persistedLocalStorage = create(persist(
  (set, get: GetState<PersistedLocalStorageState>) => ({
    searchHistory: [],
    pushSearchHistory: (searchTerm : string) => set({ searchHistory: [ ...get().searchHistory, searchTerm ]})
  }),
  {
    name: "app-local-storage", // unique name
    partialize: (state) => ({ searchHistory: state.searchHistory })
  }
))

export const pushPersistedSearchHistory = (searchTerm: string) => persistedLocalStorage.getState().pushSearchHistory(searchTerm)
export const getPersistedSearchHistory = () => persistedLocalStorage.getState().searchHistory