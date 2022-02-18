import styled from "@emotion/styled"
import { useQuery } from "react-query"
import { OutletItemMedium } from "../../components"
import { Flex, FlexItem, FlexSection } from "../../components/Flex"
import { TextHighBold } from "../../components/Text"
import { useSessionStore } from "../../storage"
import { fetchVideos } from "./query/fetchVideos.react-query"


type SnippetData = {
  snippet: {
    thumbnails : {
      default: {
        url: string
      }
    }
    title: string,
    description: string
  }
}

const MoreFeaturedFlexSection = styled(FlexSection)`
  background: #d3d3d380;
  width: fit-content;
  align-self: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 15px;
  padding-top: 10px;
`

export function MoreFeaturedVideos() {
  const { searchTerm } = useSessionStore()
  const response = useQuery(['videos', searchTerm], () => fetchVideos(searchTerm), { keepPreviousData : true  })
  return ( 
    <MoreFeaturedFlexSection wrap={"wrap"} gap="10px"> 
      <FlexItem>
        <TextHighBold>More Videos</TextHighBold>
      </FlexItem>
      <Flex wrap={"wrap"} gap="25px" >
        {response.data?.data?.items.map(({snippet} : SnippetData, index: number) => {
          if (index > 3) {
            return (
              <FlexItem key={index}>
                <OutletItemMedium
                  isError={response.isError}
                  isLoading={response.isLoading} 
                  imgURL={snippet.thumbnails.default.url} 
                  title={snippet.title}
                  desc={snippet.description}
              /> 
            </FlexItem>)  
          }
          return null
        })} 
        
      
    </Flex>
  </MoreFeaturedFlexSection>)
}