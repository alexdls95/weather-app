import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { cities, getWeatherCities as _getWeatherCities, getForecastDataFromCities as _getForecastDataFromCities } from './cities'
import { city } from './city'


export default combineReducers({
  city,
  cities,
})

export const getCity = state => state.city
export const getCities = state => state.cities

export const getForecastDataFromCities = createSelector(
  getCities,
  getCity,
  _getForecastDataFromCities
)

export const getWeatherCities = createSelector(
  state => state.cities,
  _getWeatherCities
)
