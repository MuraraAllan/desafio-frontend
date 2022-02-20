import styled from "@emotion/styled";

import { Text, TextMedium, Thumbnail } from "."
import { Flex, FlexItem } from "./Flex"
import { TextTitle, TextTitleMedium } from "./Text";

interface OutletItemProps {
  imgURL?: string,   
  isLoading?: boolean, 
  isError?: boolean, 
  title: string,
  desc?: string
} 

const OutletItemFlexBordered = styled(Flex)`border: 2px solid; max-width: 300px; background: #8380801c;`

const OutletItem = ({ isError, isLoading, imgURL, title, desc } : OutletItemProps) : JSX.Element  => {
  return (
    <OutletItemFlexBordered gap="10px" align="center">
      <Thumbnail 
        imgURL={imgURL} 
        isError={isError} 
        isLoading={isLoading}
      />
      <TextTitle>{title}</TextTitle>
    </OutletItemFlexBordered>
  )
} 
const OutletItemMediumFlexBordered = styled(Flex)`
  border: 2px solid; 
  width: 300px;
  max-width: 300px; 
  background: #8380801c; 
  padding: 10px;
  max-height: 150px;
  height: 150px;
`

const OutletItemMedium = ({ isError, isLoading, imgURL, title, desc } : OutletItemProps) : JSX.Element  => {
  return (
    <OutletItemMediumFlexBordered gap="10px" align="center">
        <Thumbnail 
          imgURL={imgURL} 
          isError={isError} 
          isLoading={isLoading}
        />
        <Flex direction="column" justify="center" align="center" gap="5px">
          <TextTitleMedium>{title}</TextTitleMedium>
          <TextMedium>{desc}</TextMedium>
        </Flex>
    </OutletItemMediumFlexBordered>
  )
} 


export {
  OutletItem,
  OutletItemMedium
}