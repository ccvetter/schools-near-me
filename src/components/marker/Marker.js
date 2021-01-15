import React from 'react'
import HomeMarker from './HomeMarker'
import SchoolMarker from './SchoolMarker'
import PropTypes from 'prop-types'

function Marker (props) {
  switch (props.type) {
    case 'home':
      return <HomeMarker
              lat={props.lat}
              lng={props.lng}
              name={props.name}
              color={props.color}
            />
    case 'school':
      return <SchoolMarker
              lat={props.lat}
              lng={props.lng}
              name={props.name}
              icon={props.icon}
            />
  }
}

Marker.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  lat: PropTypes.any,
  lng: PropTypes.any,
  color: PropTypes.string,
  icon: PropTypes.string
}

export default Marker
