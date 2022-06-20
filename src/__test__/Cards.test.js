import React from 'react'

import { render, screen } from '@testing-library/react'

import Cards from '../components/Cards'

const FAKE_WEATHER = {
  date: new Date(),
  description: 'some',
  icon: 'icon',
  min: '2',
  max: '10',
  humidity: '30'
}

describe('WeatherDayCard', () => {
  test('When render with correct content', () => {
    render(
        <Cards weather={FAKE_WEATHER} />
    )

    const img = screen.getByRole('img')
    const min = screen.getByText('Min: 2 °C')
    const max = screen.getByText('Max: 10 °C')
    const humidity = screen.getByText('Humidity: 30%')

    expect(min).toBeInTheDocument()
    expect(max).toBeInTheDocument()
    expect(humidity).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'Logo')

    screen.debug()
  })
})
