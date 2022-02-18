import { useCallback, useState } from "react"
import styled from '@emotion/styled'

import { pushPersistedSearchHistory, useSessionStore } from "../../storage"
import { Flex } from "../Flex"
import { useIsFetching } from "react-query"

const FlexLarge = styled(Flex)`width: 90%;`
const InputText = styled.input`
  min-width: 10px;
  width: 90%;
`

export function Search() {
  const [ localSearchTerm, setLocalSearchTerm ] = useState<string>('')
  const { setSearchTerm } = useSessionStore()
  const isFetching = useIsFetching()

  const dispatchSearchAction = useCallback((evt) => {
    evt.preventDefault()
    setLocalSearchTerm(evt.target.value)
    if (isFetching) return evt
    setSearchTerm(evt.target.value)
    return evt
  }, [setSearchTerm])

  return (
    <FlexLarge gap="5px" justify="center">
      <InputText onChange={dispatchSearchAction} />
      <button onClick={(evt) => { 
        evt.preventDefault() 
        setSearchTerm(localSearchTerm); 
        pushPersistedSearchHistory(localSearchTerm) 
      }}>Search</button>
    </FlexLarge>
  )
}