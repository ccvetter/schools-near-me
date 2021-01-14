import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import Marker from './marker/Marker'
import _ from 'underscore'

function LocationMap (props) {
  const defaultCenter = { lat: 33.9577, lng: -83.3748 }
  const [location, setLocation] = useState(props.location)
  const [zoom] = useState(11)

  const handleClick = (e) => {
    const loc = { lat: e.lat, lng: e.lng }
    setLocation(loc)
    props.onLocationChange(loc)
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const loc = { lat: position.coords.latitude, lng: position.coords.longitude }
        setLocation(loc)
        props.onLocationChange(loc)
      })
    }
  }, [])

  const apiHasLoaded = (map, maps) => {
    if (location) {
      const center = new maps.LatLng(location)
      map.panTo(center)
    }
  }

  // const addressChange = (places) => {
  //   console.log(places)
  //   setAddress(places)
  //   // const searchBox = new window.google.maps.places.SearchBox(e)
  //   // console.log(searchBox)
  //   // const autocomplete = new window.google.maps.places.Autocomplete(
  //   //   document.getElementById('addressAuto'),
  //   //   {
  //   //     types: ['(cities)']
  //   //   }
  //   // )
  //   // console.log(address, autocomplete)
  //   console.log(address)
  // }

  if (_.isEmpty(props.location) || !location) {
    return <p>Loading...</p>
  }
  const schoolMarkers = []
  !_.isEmpty(props.locations) && props.locations.forEach((marker, i) => {
    schoolMarkers.push(<Marker
      key={i}
      type="school"
      lat={marker.latitude}
      lng={marker.longitude}
      name={marker.name}
      icon={marker.image_url}
    />)
  })

  return (
    <div>
      <div style={{ height: '60vh', width: '100%' }}>
        <div id="map"></div>
        <GoogleMapReact
          key={location}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            libraries: ['places']
          }}
          onGoogleApiLoaded={({ map, maps }) => {
            apiHasLoaded(map, maps)
          }}
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={defaultCenter}
          defaultZoom={zoom}
          onClick={(e) => handleClick(e)}
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
      <div className="row">
        <div className="col-md-4">
          <input type="text" placeholder={props.distance}
            onChange={(event) => props.onDistanceChange(event.target.value)}></input>
        </div>
      </div>
      <div className="mt-3">
        <input
          id="addressAuto"
          placeholder="Enter an address"
          // onChange={(event) => addressChange(event.target.value)}
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
  distance: PropTypes.number,
  locations: PropTypes.array,
  location: PropTypes.object
}

export default React.memo(LocationMap)
