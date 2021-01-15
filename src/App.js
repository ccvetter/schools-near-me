import React, { useEffect, useState, useCallback } from 'react'
import './App.css'
import LocationMap from './components/LocationMap'
import LocationList from './components/LocationList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [locations, setLocations] = useState(null)
  const [location, setLocation] = useState(null)
  const [distance, setDistance] = useState(50)

  useEffect(() => {
    if (location) update()
  }, [distance, location])

  const changeDistance = (d) => {
    if (d) {
      setDistance(parseInt(d))
    }
  }

  const changeLocation = useCallback(loc => {
    setLocation({ lat: parseFloat(loc.lat), lng: parseFloat(loc.lng) })
  })

  const update = () => {
    const apiUrl = `http://localhost:4000/schools/${location.lat}/${location.lng}/${distance}`
    fetch(apiUrl)
      .then((res) => res.json())
      .then((locations) => {
        setLocations(locations)
      })
  }

  return (
    <div className="App">
      <LocationMap onDistanceChange={changeDistance}
        onLocationChange={changeLocation}
        locations={locations}
        location={location}
        distance={distance}></LocationMap>
      <LocationList locations={locations} location={location} onLocationChange={changeLocation}></LocationList>
    </div>
  )
}

export default App
