import { SET_FORECAST_DATA, SET_CITY_WEATHER, GET_CITY_WEATHER } from './../actions'
import { createSelector } from 'reselect'
import toPairs from 'lodash.topairs'

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload
      return {
        ...state,
        [city]: {
          ...state[city],
          forecastData,
          forecastDataDate: new Date()
        }
      }
    } 
    case GET_CITY_WEATHER: {
      const city = action.payload
      return {
        ...state,
        [city]: {
          weather: null
        }
      }
    }
    case SET_CITY_WEATHER: {
      const { city, weather } = action.payload
      return {
        ...state,
        [city]: {
          weather,
        }
      }

    }
    default:
      return state
  }
}

export const getForecastDataFromCities = createSelector(
  (state, city) => state[city] && state[city].forecastData,
  forecastData => forecastData
) 
const fromObjectToArray = cities => (
  toPairs(cities).map(
    ([key, value]) => ({
      key,
      name: key,
      data: value.weather
    })
  )
)
export const getWeatherCities = createSelector(
  state => fromObjectToArray(state),
  cities => cities
)
