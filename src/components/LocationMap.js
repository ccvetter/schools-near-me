import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import Marker from './marker/Marker'

function LocationMap (props) {
  const [location, setLocation] = useState({ lat: 33.9577, lng: -83.3748 })
  const [zoom] = useState(11)
  const [address, setAddress] = useState({})

  const handleClick = (e) => {
    console.log(e)
    const loc = { lat: e.lat, lng: e.lng }
    setLocation(loc)
    props.onLocationChange(loc)
  }

  const addressChange = (e) => {
    setAddress(e)
    console.log(e)
    // const searchBox = new window.google.maps.places.SearchBox(e)
    // console.log(searchBox)
    // const autocomplete = new window.google.maps.places.Autocomplete(
    //   document.getElementById('addressAuto'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // console.log(address, autocomplete)
    console.log(address)
  }

  // const changeDistance = () => {
  //   this.props.onDistanceChange()
  // }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
      })
    }
  })

  let schoolMarkers = []
  if (!props.locations) return <span>Loading...</span>

  schoolMarkers = []
  props.locations.forEach((marker, i) => {
    schoolMarkers.push(<Marker
      key={i}
      type="school"
      lat={marker.latitude}
      lng={marker.longitude}
      text={marker.name}
      icon={marker.image_url}
    />)
  })

  return (
    <div>
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            libraries: ['places']
          }}
          onGoogleApiLoaded={({ map, maps }) => {
            // addressChange(maps.places)
            console.log(maps.places)
          }}
          defaultCenter={location}
          defaultZoom={zoom}
          onClick={handleClick}
        >
          <Marker
            type="home"
            lat={location.lat}
            lng={location.lng}
            name="My Location"
            color="red"
          />
          {schoolMarkers}
        </GoogleMapReact>
      </div>
      <div>
        <input
          id="addressAuto"
          placeholder="Enter an address"
          onChange={event => addressChange(event.target.value)}
          type="text"
          name="address">
        </input>
      </div>
    </div>
  )
}

LocationMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  onLocationChange: PropTypes.func,
  onDistanceChange: PropTypes.func,
  locations: PropTypes.array
}

export default LocationMap
