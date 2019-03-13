import convert from 'convert-units'
import * as weatherStates from '../constants/weather'

const getTemp = kelvin => {
  return Math.round(convert(kelvin).from("K").to("C"))
}

const getWeatherState = weather => {
  const { id } = weather

  if (id < 300) {
    return weatherStates.THUNDER
  } else if (id < 400) {
    return weatherStates.DRIZZLE
  } else if (id < 500) {
    return weatherStates.RAIN
  } else if (id < 700) {
    return weatherStates.SNOW
  } else if (id === 800) {
    return weatherStates.SUN
  } else {
    return weatherStates.CLOUD
  }
}

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main
  const { speed } = weather_data.wind
  const weatherState = getWeatherState(weather_data.weather[0])
  const temperature = getTemp(temp)

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  }

  return data

}

export default transformWeather