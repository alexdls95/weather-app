import { SET_FORECAST_DATA } from './../actions'

export const cities = (citiesState = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload
      return {
        ...citiesState,
        [city]: {
          forecastData,
        }
      }
    default:
      return citiesState
  }
}