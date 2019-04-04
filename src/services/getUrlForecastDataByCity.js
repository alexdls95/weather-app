import { url_base_forecast, api_key } from '../constants/api_url'

const getUrlForecastDataByCity = city => {
  return `${url_base_forecast}?q=${city}&appid=${api_key}`
}

export default getUrlForecastDataByCity