import transformWeather from '../services/transformWeather';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity'

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const SET_CITY_WEATHER = 'SET_CITY_WEATHER'
export const GET_CITY_WEATHER = 'GET_CITY_WEATHER'
export const SET_WEATHER = 'SET_WEATHER'

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
})

const getWeatherCity = payload => ({
  type: GET_CITY_WEATHER,
  payload,
})

const setWeatherCity = payload => ({
  type: SET_CITY_WEATHER,
  payload,
})

export const setWeather = (payload) => {
  return dispatch => {
    payload.forEach(city => {
      
      dispatch(getWeatherCity(city))
      
      const url_weather = getUrlWeatherByCity(city)
      fetch(url_weather).then (data => {
        return data.json()
      }).then (data => {
        const weather = transformWeather(data)
        dispatch(setWeatherCity({city, weather}))
      })
    })
  }
}