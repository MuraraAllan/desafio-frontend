
import create, { GetState, State } from "zustand"
import { persist } from "zustand/middleware"


// export a hook to an Inmemory store, rehydrated from localStore

export const usePersistedLocalStorage = create(persist(
  (set, get: GetState<{ searchHistory : Array<String>}>) => ({
    searchHistory: [],
    getSearchHistory: get().searchHistory,
    pushSearchHistory: (searchTerm : string) => set({ searchHistory: get().searchHistory.push(searchTerm) })
  }),
  {
    name: "search-history-storage", // unique name
  }
))