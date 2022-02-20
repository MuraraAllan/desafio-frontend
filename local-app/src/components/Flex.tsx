import styled from '@emotion/styled'

interface FlexProps {
  direction?: 'column' | 'row'
  flex?: number
  grow?: number
  justify?: string
  align?: string
  wrap?: string
  gap?: string
  maxWidth?: string
}


export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify } : FlexProps) => justify != null ? justify : 'unset' };
  align-content: ${({ align } : FlexProps) => align != null ? align : 'unset' };
  align-items: ${({ align } : FlexProps) => align != null ? align : 'unset' };
  flex-wrap: ${({ wrap } : FlexProps) => wrap ? wrap : 'nowrap' };
  flex-direction: ${({ direction } : FlexProps) => direction != null ? direction : 'row'};
  flex-grow: ${({ grow } : FlexProps) => grow != null ? grow : 'unset'};  
  gap: ${({ gap } : FlexProps) => gap != null ? gap : 'unset'};  
  max-width: ${({ maxWidth } : FlexProps) => maxWidth != null ? maxWidth : 'unset'};  
`

export const FlexSection = styled.section`
  display: flex;
  justify-content: ${({ justify } : FlexProps) => justify != null ? justify : 'unset' };
  align-content: ${({ align } : FlexProps) => align != null ? align : 'unset' };
  align-items: ${({ align } : FlexProps) => align != null ? align : 'unset' };
  flex-wrap: ${({ wrap } : FlexProps) => wrap ? wrap : 'nowrap' };
  flex-direction: ${({ direction } : FlexProps) => direction != null ? direction : 'row'};
  flex-grow: ${({ grow } : FlexProps) => grow != null ? grow : 'unset'};  
  gap: ${({ gap } : FlexProps) => gap != null ? gap : 'unset'};  
`

export const FlexHeader = styled.header`
  display: flex;
  justify-content: ${({ justify } : FlexProps) => justify != null ? justify : 'unset' };
  align-content: ${({ align } : FlexProps) => align != null ? align : 'unset' };
  align-items: ${({ align } : FlexProps) => align != null ? align : 'unset' };
  flex-wrap: ${({ wrap } : FlexProps) => wrap ? wrap : 'nowrap' };
  flex-direction: ${({ direction } : FlexProps) => direction != null ? direction : 'row'};
  flex-grow: ${({ grow } : FlexProps) => grow != null ? grow : 'unset'};  
  gap: ${({ gap } : FlexProps) => gap != null ? gap : 'unset'};  
`

export const FlexItem = styled.div`
  flex-grow: ${({ grow } : FlexProps) => grow != null ? grow : 'unset'};  
`
