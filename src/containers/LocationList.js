import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setSelectedCity } from './../actions'
import { connect } from 'react-redux'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {
  handleSelectedLocation = city => {
    this.props.setSelectedCity(city)
  }
  render() {
    return (
      <LocationList
        cities={this.props.cities}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSelectedCity: value => dispatch(setSelectedCity(value)),
});

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

export default connect(null, mapDispatchToProps)(LocationListContainer);
