import React from 'react'
import './SchoolMarker.css'
import PropTypes from 'prop-types'

function SchoolMarker (props) {
  return (
    <div className="school-marker"
      style={{ cursor: 'pointer' }}
      title={ props.name }>
        <img className="icon" src={props.icon}></img>
    </div>
  )
}

SchoolMarker.propTypes = {
  name: PropTypes.any,
  icon: PropTypes.any
}

export default SchoolMarker
