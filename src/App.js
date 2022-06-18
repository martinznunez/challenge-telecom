import React from 'react'

import SelectOptions from './components/SelectOptions'

import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

function App () {
  return (
    <Container>
      <h1>Weather App</h1>
      <SelectOptions />
    </Container>
  )
}

export default App
