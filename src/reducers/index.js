import { combineReducers } from 'redux'
import { cities, getWeatherCities as _getWeatherCities } from './cities'
import { city } from './city'
import { createSelector } from 'reselect'


export default combineReducers({
  city,
  cities,
})

export const getWeatherCities = createSelector(
  state => state.cities,
  _getWeatherCities
)
