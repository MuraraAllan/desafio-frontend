import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import { HomePage, ChannelsPage } from './pages'
import { createSessionStore, getPersistedSearchHistory, pushPersistedSearchHistory, SessionStoreProvider } from './storage';
import { NavBar } from './components/NavBar';

const queryClient = new QueryClient()

function App() { 
  useEffect(() => {
    pushPersistedSearchHistory('lfasdlfsalfdsa')
    console.log('púsh search', getPersistedSearchHistory())
  }, [])
  
  // const isFetching = useIsFetching
  // useEffect(() => pushSearchHistory("heybuddy"), [])
  // console.log('hey dear', getSearchHistory())
  
  return (
    <div className="App">
      <SessionStoreProvider createStore={createSessionStore}>
        <NavBar />
        <QueryClientProvider client={queryClient}>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="/channels" element={<ChannelsPage />} />
          </Routes>
        </QueryClientProvider>
      </SessionStoreProvider>
    </div>
  );
}

export default App;
