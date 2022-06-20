export const getCityWeather = (list) => {
  const firstDay = {
    id: 1,
    date: new Date(list[0].dt * 1000),
    icon: list[0].weather[0].icon,
    description: list[0].weather[0].main,
    min: Math.floor(list[0].temp.min),
    max: Math.floor(list[0].temp.max),
    humidity: list[0].humidity
  }
  const secondDay = {
    id: 2,
    date: new Date(list[1].dt * 1000),
    icon: list[1].weather[0].icon,
    description: list[1].weather[0].main,
    min: Math.floor(list[1].temp.min),
    max: Math.floor(list[1].temp.max),
    humidity: list[1].humidity
  }
  const thirdDay = {
    id: 3,
    date: new Date(list[2].dt * 1000),
    icon: list[2].weather[0].icon,
    description: list[2].weather[0].main,
    min: Math.floor(list[2].temp.min),
    max: Math.floor(list[2].temp.max),
    humidity: list[2].humidity
  }
  const fourthDay = {
    id: 4,
    date: new Date(list[3].dt * 1000),
    icon: list[3].weather[0].icon,
    description: list[3].weather[0].main,
    min: Math.floor(list[3].temp.min),
    max: Math.floor(list[3].temp.max),
    humidity: list[3].humidity
  }
  const fivethDay = {
    id: 5,
    date: new Date(list[4].dt * 1000),
    icon: list[4].weather[0].icon,
    description: list[4].weather[0].main,
    min: Math.floor(list[4].temp.min),
    max: Math.floor(list[4].temp.max),
    humidity: list[4].humidity
  }

  return [firstDay, secondDay, thirdDay, fourthDay, fivethDay]
}
