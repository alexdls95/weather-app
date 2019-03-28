import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCity, setWeather } from './../actions'
import { getWeatherCities } from '../reducers'
import { connect } from 'react-redux'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {

  componentDidMount() {
    this.props.setWeather(this.props.cities)
  }
  
  handleSelectedLocation = city => {
    this.props.setCity(city)
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
  citiesWeather: getWeatherCities(state)
})

const mapDispatchToProps = dispatch => ({
  setCity: city => dispatch(setCity(city)),
  setWeather: cities => dispatch(setWeather(cities))
});

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  getWeatherCities: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
