import styled from "@emotion/styled"
import { useQuery } from "react-query"


import { OutletItem, Thumbnail } from "../../components"
import { Flex, FlexSection } from "../../components/Flex"
import { TextHighBold } from "../../components/Text"
import { useSessionStore } from "../../storage"
import { fetchVideos } from "./query/fetchVideos.react-query"

const FeaturedFlexSection = styled(FlexSection)`
    background: #d3d3d3de;
    width: fit-content;
    align-self: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 15px;
    padding-top: 10px;
  `

export function FeaturedVideos() {
  const { searchTerm } = useSessionStore()
  const response = useQuery(['videos', searchTerm], () => fetchVideos(searchTerm), { keepPreviousData : true })
  const data = response?.data?.data 
  
  return (
    <FeaturedFlexSection direction="row" align="center" justify="center" gap="40px" wrap={"wrap"}>
      <Flex direction="column" gap="10px">
        <TextHighBold>Featured</TextHighBold>
        <Thumbnail 
          isError={response.isError} 
          isLoading={response.isLoading}
          imgURL={data?.items[0].snippet.thumbnails.high.url} 
        />
      </Flex>
      <Flex direction="column" gap="10px">
        <TextHighBold>Related</TextHighBold>
        <OutletItem
          isLoading={response.isLoading}
          isError={response.isError}
          imgURL={data?.items[1].snippet.thumbnails.default.url} 
          title={data?.items[1].snippet.title}
          desc={data?.items[1].snippet.description}
        />
        <OutletItem
          isLoading={response.isLoading}
          isError={response.isError}
          imgURL={data?.items[2].snippet.thumbnails.default.url} 
          title={data?.items[2].snippet.title}
        />
        <OutletItem
          isLoading={response.isLoading}
          isError={response.isError}
          imgURL={data?.items[3].snippet.thumbnails.default.url} 
          title={data?.items[3].snippet.title}
        />
      </Flex>
  </FeaturedFlexSection>)
}