import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './../actions'
import { getWeatherCities, getCity } from '../reducers'
import { connect } from 'react-redux'
import LocationList from './../components/LocationList'
import { bindActionCreators } from 'redux';

class LocationListContainer extends Component {

  componentDidMount() {
    const { setWeather, setCityAndForecastData, cities, city } = this.props
    setWeather(cities)
    setCityAndForecastData(city)
  }
  
  handleSelectedLocation = city => {
    this.props.setCityAndForecastData(city)
  }
  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state),
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

LocationListContainer.propTypes = {
  setCityAndForecastData: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  getWeatherCities: PropTypes.array,
  getCIty: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
