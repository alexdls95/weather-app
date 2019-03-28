import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended'
import { connect } from 'react-redux'
import { getForecastDataFromCities } from '../reducers/cities'

class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props
    return (
      city &&
      <ForecastExtended city={city} forecastData={forecastData}/>
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  city: state.city,
  forecastData: getForecastDataFromCities(state.cities, state.city),
})

export default connect(mapStateToProps)(ForecastExtendedContainer)
