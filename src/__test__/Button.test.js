import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Button from '../components/Button'

const handleClick = jest.fn()

const FAKE_TITLE = 'title test'

test('when rendering the component value and event checks', () => {
  const FAKE_DISABLED = false
  render(
    <Button title={FAKE_TITLE} handleClick={handleClick} disabled={FAKE_DISABLED} />
  )

  const btn = screen.getByText(/title test/i)

  expect(btn).toBeInTheDocument()

  fireEvent.click(btn)

  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('when the button is disabled', () => {
  const FAKE_DISABLED = true

  render(
      <Button title={FAKE_TITLE} handleClick={handleClick} disabled={FAKE_DISABLED} />
  )

  const btn = screen.getByText(/title test/i)

  expect(btn).toBeInTheDocument()

  fireEvent.click(btn)

  expect(handleClick).not.toHaveBeenCalled()
})
