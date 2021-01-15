import React from 'react'
import './HomeMarker.css'
import PropTypes from 'prop-types'

function HomeMarker (props) {
  return (
    <div className="home-marker"
      style={{ backgroundColor: props.color, cursor: 'pointer' }}
      title={ props.name }
    />
  )
}

HomeMarker.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
}

export default HomeMarker
