import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import { HomePage, ChannelsPage } from './pages'
import { createSessionStore, SessionStoreProvider } from './storage';
import { NavBar } from './components/NavBar/NavBar';
import { Flex } from './components/Flex';

const queryClient = new QueryClient()

function App() { 
  // const isFetching = useIsFetching
  // useEffect(() => pushSearchHistory("heybuddy"), [])
  // console.log('hey dear', getSearchHistory())
  return (
    <Flex direction='column' gap="20px">
      <SessionStoreProvider createStore={createSessionStore}>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Routes>
            <Route path="/channels" element={<ChannelsPage />} />
            <Route index element={<HomePage />} />
          </Routes>
        </QueryClientProvider>
      </SessionStoreProvider>
    </Flex>
  );
}

export default App;
