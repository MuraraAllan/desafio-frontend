import styled from '@emotion/styled'

export const Text = styled.span`font-size: 10px; 
overflow: hidden;
word-wrap: break-word;
max-width: 155px;
max-height: 50px;
`

export const TextMedium = styled(Text)`
  font-size: 12px;
`

export const TextHigh = styled(Text)`
font-size: 16px;
`
export const TextHighBold = styled(TextHigh)`
  font-weight: bold
`

export const TextTitle = styled.h4`
  font-size: 12px;
`

export const TextTitleMedium = styled.span`
  font-size: 13px;
  font-weight: bold;
  max-width: 165px;
  `

  
export const TextTitleLarge = styled.h1`line-height: 0rem; font-size: 32px;`

