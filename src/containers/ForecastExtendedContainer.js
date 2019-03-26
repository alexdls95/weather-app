import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended'
import { connect } from 'react-redux'

const propTypes = {
  city: PropTypes.string.isRequired,
};


class ForecastExtendedContainer extends Component {
  render() {
    return (
      this.props.city &&
      <ForecastExtended city={this.props.city} />
    );
  }
}


ForecastExtendedContainer.propTypes = propTypes;

const mapStateToProps = ({city}) => ({ city })

export default connect (mapStateToProps, null) (ForecastExtendedContainer);
