import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import Marker from './marker/Marker'
import _ from 'underscore'

function LocationMap (props) {
  const defaultCenter = { lat: 33.9577, lng: -83.3748 }
  const [zoom] = useState(11)
  const [map, setMap] = useState(null)
  const [maps, setMaps] = useState(null)

  // Change props.location when clicking on the map
  const handleClick = (e) => {
    const loc = { lat: e.lat, lng: e.lng }
    props.onLocationChange(loc)
  }

  // Get the users position and set props.location
  useEffect(() => {
    if ('geolocation' in navigator && !props.location) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const loc = { lat: position.coords.latitude, lng: position.coords.longitude }
        props.onLocationChange(loc)
      })
    }
  })

  // Update the map on props.location and maps changes
  useEffect(() => {
    // Only update if map is loaded
    if (map) updateMap()
  }, [props.location, maps])

  const updateMap = () => {
    if (props.location) {
      const center = new maps.LatLng(props.location)
      // Recenter the map on new location
      map.panTo(center)
    }
  }

  // Show loading if props.location is empty
  if (_.isEmpty(props.location)) {
    return <p>Loading...</p>
  }

  const schoolMarkers = []
  // Create school markers as long as props.locations is populated
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
          key={props.location}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY
          }}
          onGoogleApiLoaded={({ map, maps }) => {
            setMap(map)
            setMaps(maps)
          }}
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={defaultCenter}
          defaultZoom={zoom}
          onClick={(e) => handleClick(e)}
        >
          <Marker
            type="home"
            lat={props.location.lat}
            lng={props.location.lng}
            name="My Location"
            color="red"
          />
          {schoolMarkers}
        </GoogleMapReact>
      </div>
      <div className="mt-3 mb-3 text-center distance">
        <label className="mr-2">Distance from location</label>
        <input type="text" placeholder={props.distance}
          onChange={(event) => props.onDistanceChange(event.target.value)}></input>
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
