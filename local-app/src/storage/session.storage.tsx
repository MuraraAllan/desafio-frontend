import create, { SetState } from 'zustand'
import createContext from 'zustand/context'

// inmemory 
// store userInfo
// store searchTerm ( searchTerm used by fetch and shared across application through Context)

const { Provider, useStore } = createContext();
// const randomInterestingTerms = ["cats and dogs playing cute compilation", "remix by michael jackson react", "rhinos drinking water"]
// const randomGenerator = Math.floor((Math.random() * 1) + (Math.random() * 1) + (Math.random() * 1))

const createSessionStore = () =>
  create((set: SetState<{ searchTerm: String}>) => ({
    // user
    searchTerm: '',
    setSearchTerm: (searchTerm: String) => set({ searchTerm })
  }));

  export default {
    SessionStoreProvider : Provider,
    createSessionStore,
    useSessionStore: useStore
  }