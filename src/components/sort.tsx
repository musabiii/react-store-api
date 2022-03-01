import React from 'react'
import styled from 'styled-components'

const SortBlock = styled.div`
padding: 10px;
  
  button {
      margin: 0 10px;
  }
  
`

export default function Sort() {
  return (
    <SortBlock>
        order by
        <button>name</button>
        <button>price</button>
    </SortBlock>
  )
}
