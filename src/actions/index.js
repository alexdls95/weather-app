import { api_key, url_base_forecast } from './../constants/api_url'
import transformForecast from './../services/transformForecast'

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

const setCity = payload => ({
  type: SET_CITY,
  payload,
})

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

export const setSelectedCity = payload => {
  return async dispatch => {
    const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`
    dispatch(setCity(payload))
    const data = await fetch(url_forecast);
    const weather_data = await (data.json());
    const forecastData = transformForecast(weather_data);
    console.log(forecastData);
    dispatch(setForecastData({ city: payload, forecastData }));
  }
}