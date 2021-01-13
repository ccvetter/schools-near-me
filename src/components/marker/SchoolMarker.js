import React from 'react'
import './SchoolMarker.css'

const SchoolMarker = (props: any) => {
  const { name } = props
  return (
    <div className="school-marker"
      style={{ cursor: 'pointer' }}
      title={ name }
    />
  )
}

export default SchoolMarker
