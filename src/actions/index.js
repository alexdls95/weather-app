import transformWeather from '../services/transformWeather';
import transformForecast from '../services/transformForecast'
import getUrlWeatherByCity from '../services/getUrlWeatherByCity'
import getUrlForecastDataByCity from '../services/getUrlForecastDataByCity'
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

const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
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

export const setCityAndForecastData = (payload) => {
  return async (dispatch, getState) => {
    dispatch(setCity(payload))

    const state = getState()
    const date = state.cities[payload] && state.cities[payload].forecastDataDate
    const now = new Date()

    if(date && (now - date) < 1 * 60 * 1000) {
      return
    }

    const url_forecast = getUrlForecastDataByCity(payload) 
    const data = await fetch(url_forecast)
    const weather_data = await data.json()
    const forecastData = transformForecast(weather_data)
    console.log(forecastData)

    dispatch(setForecastData({ city: payload, forecastData }))
  }
}