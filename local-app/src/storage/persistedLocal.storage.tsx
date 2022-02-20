
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
    partialize: ({ searchHistory }) => ({ searchHistory })
  }
))

export const pushPersistedSearchHistory = (searchTerm: string) => searchTerm.length > 0 ? persistedLocalStorage.getState().pushSearchHistory(searchTerm) : null
export const getPersistedSearchHistory = () => persistedLocalStorage.getState().searchHistory