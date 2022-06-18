import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { location } from '../utils/location'
import Button from './Button'
import { getCity } from '../service/getCity'
import Cards from './Card'
import Loading from './Loading'
import { getCityWeather } from '../utils/getListCity'

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: auto;
  justify-content: center;
`

const Select = styled.select`
  display: block;
  font-size: 1rem;
  font-family: "Verdana", sans-serif;
  font-weight: 400;
  color: #444;
  line-height: 1.3;
  padding: 0.4em 1.4em 0.3em 0.8em;
  width: 300px;
  cursor: pointer;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
  border-radius: 0.3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
`

const SelectOptions = () => {
  const [currentCity, setCurrentCity] = useState(null)
  const [selectedCityWeather, setSelectCityWeather] = useState(null)
  const [selectedCity, setSelectedCity] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await location()

        const city = response.data.city

        const responseList = await getCity(city)

        const listOfDays = responseList.data.list

        const cityWeather = getCityWeather(listOfDays)

        setCurrentCity(city)
        setSelectCityWeather(cityWeather)
        setSelectedCity(city)
      } catch (e) {
        alert('there was an error')
      }
    }
    fetchLocation()
  }, [])

  const handleClickSearch = async () => {
    setIsLoading(true)
    try {
      const response = await getCity(selectedCity)
      const list = response.data.list
      const cityWeather = getCityWeather(list)
      setSelectCityWeather(cityWeather)
    } catch (error) {
      alert('there was an error')
    } finally {
      setIsLoading(false)
      setIsDisabled(true)
    }
  }
  const renderWeatherCards = () => {
    return selectedCityWeather.map((day) => {
      return <Cards key={day.id} weather={day} />
    })
  }

  const handlerChange = (e) => {
    const value = e.target.value

    setIsDisabled(false)
    setSelectedCity(value)
  }

  if (!currentCity || isLoading) return <Loading />
  return (
    <div>
      <Select onChange={(e) => handlerChange(e)}>
        <option value={currentCity}>{currentCity}</option>
        <option value="Rosario">Rosario</option>
        <option value="Paris">Paris</option>
        <option value="Los Ángeles">Los Ángeles</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Bariloche">Bariloche</option>
      </Select>
      <Button
        disabled={isDisabled}
        handleClick={handleClickSearch}
        title="Search weather"
      />
      <ContainerCard>{renderWeatherCards()}</ContainerCard>
    </div>
  )
}

export default SelectOptions
