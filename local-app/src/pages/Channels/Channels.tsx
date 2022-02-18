import { useQuery } from 'react-query'

import { OutletItemMedium, Text } from '../../components'
import { Flex } from '../../components/Flex'
import { TextHighBold } from '../../components/Text'
import { useSessionStore } from '../../storage'
import { fetchChannels } from './query/fetchChannels.react-query'

export function ChannelsPage(){
  const { searchTerm } = useSessionStore()
  const response = useQuery(['channels', searchTerm], () => fetchChannels(searchTerm), { keepPreviousData : true })
  const data = response?.data?.data 

  return (
    <>
      <TextHighBold>Channels</TextHighBold>
      <Flex gap="50px" wrap="wrap">
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[0].snippet.thumbnails.default.url} 
          title={data?.items[0].snippet.title}
          desc={data?.items[0].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[1].snippet.thumbnails.default.url} 
          title={data?.items[1].snippet.title}
          desc={data?.items[1].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[3].snippet.thumbnails.default.url} 
          title={data?.items[3].snippet.title}
          desc={data?.items[3].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[2].snippet.thumbnails.default.url} 
          title={data?.items[2].snippet.title}
          desc={data?.items[2].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[4].snippet.thumbnails.default.url} 
          title={data?.items[4].snippet.title}
          desc={data?.items[4].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[5].snippet.thumbnails.default.url} 
          title={data?.items[5].snippet.title}
          desc={data?.items[5].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[6].snippet.thumbnails.default.url} 
          title={data?.items[6].snippet.title}
          desc={data?.items[6].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[7].snippet.thumbnails.default.url} 
          title={data?.items[7].snippet.title}
          desc={data?.items[7].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[8].snippet.thumbnails.default.url} 
          title={data?.items[8].snippet.title}
          desc={data?.items[8].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[9].snippet.thumbnails.default.url} 
          title={data?.items[9].snippet.title}
          desc={data?.items[9].snippet.description}
        /> 
        <OutletItemMedium
          isError={response.isError}
          isLoading={response.isLoading} 
          imgURL={data?.items[10].snippet.thumbnails.default.url} 
          title={data?.items[10].snippet.title}
          desc={data?.items[10].snippet.description}
        /> 
      </Flex> 
    </>

  )
}