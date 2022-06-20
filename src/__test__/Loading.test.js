import React from 'react'

import { render, screen } from '@testing-library/react'

import Loading from '../components/Loading'

test('when rendering the component', () => {
  render(
    <Loading />
  )

  expect(screen.getByText(/Loading/i)).toBeInTheDocument()
})
