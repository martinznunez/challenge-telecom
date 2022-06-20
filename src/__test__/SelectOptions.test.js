
import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import SelectOptions from '../components/SelectOptions'

jest.mock('axios')

describe('SelectOptions render', () => {
  beforeEach(() => {
    window.alert = jest.fn()
    axios.get.mockReturnValueOnce({
      data: {
        city: 'La Plata'
      }
    })
    axios.get.mockReturnValueOnce({
      data: {
        list: [
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          }
        ]
      }

    })
    axios.get.mockReturnValueOnce({
      data: {
        list: [
          {
            dt: new Date(),
            weather: [
              { icon: 'md20', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md30', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md40', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          {
            dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain' }
            ],
            temp: {
              min: '2',
              max: '10'
            },
            humidity: '10'
          }
        ]
      }

    })

    axios.get.mockClear()
    window.alert.mockClear()
  })

  test('when rendering the component', async () => {
    render(<SelectOptions />)

    const locationsCity = await screen.findByText(/La Plata/i)
    expect(locationsCity).toBeInTheDocument()

    const button = screen.getByText(/Search weather/i)
    const select = screen.getByTestId('select')
    expect(button).toBeInTheDocument()
    expect(select).toBeInTheDocument()

    await waitFor(() => {
      fireEvent.change(select, { target: { value: 'Bariloche' } })
      fireEvent.click(button)
    })
    expect(select.value).toBe('Bariloche')
  })
})

test('when rendering the component loading', async () => {
  window.alert = jest.fn()
  render(<SelectOptions />)

  const Loading = screen.getByText(/Loading/i)
  expect(Loading).toBeInTheDocument()
  window.alert.mockClear()
})
