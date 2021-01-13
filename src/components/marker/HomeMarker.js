import React from 'react'
import './HomeMarker.css'

const HomeMarker = (props: any) => {
  const { color, name } = props
  return (
    <div className="home-marker"
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={ name }
    />
  )
}

export default HomeMarker
