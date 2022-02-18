import create from 'zustand'
import createContext from 'zustand/context'

// inmemory 
// store userInfo
// store searchTerm ( searchTerm used by fetch and shared across application through Context)

const randomInterestingTerms = ["cats and dogs playing cute compilation", "remix react with michael jackson react", "rhinos drinking water"]
const randomGenerator = Math.floor((Math.random() * 1) + (Math.random() * 1) + (Math.random() * 1))

type SessionState = {
  searchTerm: string,
  setSearchTerm: (searchTerm: string) => void,
}

const { Provider : SessionStoreProvider , useStore: useSessionStore } = createContext<SessionState>();

const createSessionStore = () => create<SessionState>(
  (set, get) => ({
    searchTerm: randomInterestingTerms[randomGenerator],
    setSearchTerm: (searchTerm: string) => {
      const randomGenerator = Math.floor((Math.random() * 1) + (Math.random() * 1) + (Math.random() * 1))
      console.log('SEARCH IS 0', searchTerm)
      if (searchTerm.length === 0) {
        return set({
          searchTerm: randomInterestingTerms[randomGenerator]
        })
      } 
      return set({ searchTerm })
    }
  }))

  export { 
    SessionStoreProvider,
    createSessionStore,
    useSessionStore
  }