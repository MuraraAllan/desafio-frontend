import React, { useCallback, useState } from "react"
import { useIsFetching } from "react-query"
import styled from '@emotion/styled'

import { pushPersistedSearchHistory, useSessionStore } from "../../storage"
import { Flex } from "../Flex"

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
    if (isFetching) return
    setLocalSearchTerm(evt.target.value)
    setSearchTerm(evt.target.value)
    return evt
  }, [localSearchTerm])

  return (
    <FlexLarge gap="5px" justify="center">
      <InputText onChange={dispatchSearchAction} />
      <button onClick={() => { pushPersistedSearchHistory(localSearchTerm) }}>Search</button>
    </FlexLarge>
  )
}