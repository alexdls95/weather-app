import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import transformWeather from '../../services/transformWeather'

 
class WeatherLocation extends Component {

  constructor({ city }) {
    super();

    this.state = {
      city,
      data: null
    }
  }

  componentDidMount() {
    this.handleUpdateClick()
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather).then( resolve => {
      return resolve.json()
    }).then(data => {
      const newWeather = transformWeather(data)
      this.setState({
        data: newWeather,
      })
    })
  }

  render () {
    const { onWeatherLocationClick } = this.props
    const { city, data } = this.state
    return (
        <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
          <Location city={city}/>
          {
            data ?
              <WeatherData data={data}/>
            :
              <CircularProgress size={50}/>
          }
        </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  handleWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation