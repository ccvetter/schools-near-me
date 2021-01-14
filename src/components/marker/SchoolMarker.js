import React from 'react'
import './SchoolMarker.css'

const SchoolMarker = (props: any) => {
  const { name, icon } = props
  return (
    <div className="school-marker"
      style={{ cursor: 'pointer' }}
      title={ name }>
        <img className="icon" src={icon}></img>
    </div>
  )
}

export default SchoolMarker
