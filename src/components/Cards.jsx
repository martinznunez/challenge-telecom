import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../utils/formatDate'
import PropTypes from 'prop-types'
const Container = styled.div`
  position: relative;
  width: 200px;
 
  height: 340px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 10px;
  transition: 0.5s;
 
`
const Card = styled.div`
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;

  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h2{
      font-size:1rem;
      padding:5px;
  }
`
const Cards = ({ weather }) => {
  const { date, description, icon, min, max, humidity } = weather

  return (
    <Container>
      <Card>
        <div className="box">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Logo"

            />
            <h2 > {formatDate(date)}</h2>
            <p>{description}</p>
            <p>Min: {min} °C</p>
            <p>Max: {max} °C</p>
            <span>Humidity: {humidity}%</span>
          </div>
        </div>
      </Card>
    </Container>
  )
}

Cards.propTypes = {
  weather: PropTypes.object
}

export default Cards
