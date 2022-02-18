import styled from '@emotion/styled'

import { getPersistedSearchHistory } from "../../storage"
import { Flex, FlexHeader, FlexItem } from "../Flex"
import { GoogleOauth2Link } from "./GoogleOauth2Link"
import { Logo } from "./Logo"
import { Search } from "./Search"
import { TextHigh } from "../Text"
import { Navigation } from "./Navigation"


export function NavBar(){
  const searchHistory = getPersistedSearchHistory()
  const FlexHeaderPad = styled(FlexHeader)`
    margin-left: 12px;
  `

  const HR = styled.hr`    
    border-top: 1.5px solid;
  `

  return (<>
    <FlexHeaderPad direction="column">
      <Flex>
        <Flex direction="column" grow={0.25}>
          <Logo />
        </Flex>
        <Flex 
          grow={0.3} 
          direction="column"
          justify="flex-end"
          align="center"
          gap="5px"
        >
          <Search />
          <FlexItem>
            <Navigation />
          </FlexItem>
        </Flex>
        <Flex 
          grow={0.55} 
          align="flex-end" 
          direction="column"
          gap="15px"
          justify="flex-end"
        >
          <FlexItem>
            <GoogleOauth2Link>
              Sign-In
            </GoogleOauth2Link>
          </FlexItem>
          <FlexItem>
            <TextHigh onClick={() => alert(searchHistory)}>
              History
            </TextHigh>
            {/* <TextHigh>
              Upload
            </TextHigh> */}
          </FlexItem>
        </Flex>
        </Flex>
        <FlexItem> 
          <HR />
        </FlexItem>
    </FlexHeaderPad>
  </>
  ) 
}

