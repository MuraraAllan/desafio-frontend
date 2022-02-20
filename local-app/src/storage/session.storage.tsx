import create from 'zustand'
import createContext from 'zustand/context'
import { persist } from 'zustand/middleware'

// inmemory 
// store userInfo
// store searchTerm ( searchTerm used by fetch and shared across application through Context)

const randomInterestingTerms = ["cats and dogs playing cute compilation", "remix by michael jackson react", "rhinos drinking water"]
const randomGenerator = Math.floor((Math.random() * 1) + (Math.random() * 1) + (Math.random() * 1))

type SessionState = {
  searchTerm: string,
  setSearchTerm: (searchTerm: string) => void,
}

const { Provider : SessionStoreProvider , useStore: useSessionStore } = createContext<SessionState>();

const createSessionStore = () => create<SessionState>(persist(
  (set, get) => ({
    searchTerm: randomInterestingTerms[randomGenerator],
    setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  }),
  {
    name: "app-session-storage", // unique name
    partialize: ({ searchTerm }) => ({ searchTerm: searchTerm }),
    getStorage: () => sessionStorage
  }
))

// const createSessionStore = () =>
//   create<SessionState>((set, get) => ({
//     searchTerm: randomInterestingTerms[randomGenerator],
//     setSearchTerm: (searchTerm: string) => set(() => {
//       const randomGenerator = Math.floor((Math.random() * 1) + (Math.random() * 1) + (Math.random() * 1))
//       if (searchTerm.length === 0) {
//         return ({
//           searchTerm: randomInterestingTerms[randomGenerator]
//         })
//       } 
//       console.log('saetting', searchTerm)
//       return  ({ searchTerm })
//     })
//   }));

// const createSessionStoreold = () =>
//   create<SessionState>(persist((set, get) => ({
//     searchTerm: randomInterestingTerms[randomGenerator],
//     setSearchTerm: (searchTerm: string) => set(() => {
//       const randomGenerator = Math.floor((Math.random() * 1) + (Math.random() * 1) + (Math.random() * 1))
//       if (searchTerm.length === 0) {
//         return ({
//           searchTerm: randomInterestingTerms[randomGenerator]
//         })
//       } 
//       return ({ searchTerm })
//     })
//   }),));


  export { 
    SessionStoreProvider,
    createSessionStore,
    useSessionStore
  }