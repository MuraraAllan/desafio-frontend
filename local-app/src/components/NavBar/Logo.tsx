import styled from '@emotion/styled'
import { TextMedium } from '..';

import { Flex, FlexItem } from "../Flex";
import { TextTitleLarge } from '../Text';

export function Logo() {
  const LogoTextTitleHighColored = styled(TextTitleLarge)`color: #d71717d4;`
  const LogoSpanColored = styled(TextMedium)`color: gray`

  return (<>
    <Flex>
      <TextTitleLarge>You</TextTitleLarge>
      <LogoTextTitleHighColored>Tube</LogoTextTitleHighColored>
    </Flex>
    <LogoSpanColored>Broadcast Yourself</LogoSpanColored>
  </>)
}