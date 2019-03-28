import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities'
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
