import React from 'react'
import PropTypes from 'prop-types';

const Location = ({ city }) => {
  return (
    <div className="locationContainer"><h2>{city}</h2></div>
  )
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location