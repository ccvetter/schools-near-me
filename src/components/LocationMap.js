import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import Marker from './marker/Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>
AnyReactComponent.propTypes = {
  text: PropTypes.string
}

class LocationMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      schoolMarkers: [],
      locationMarker: {}
    }
  }

  static defaultProps = {
    center: {
      lat: 33.95771196234695,
      lng: -83.37485924829399
    },
    zoom: 11
  }

  handleClick = (event) => {
    console.log(event)
    this.setState({
      locationMarker: {
        lat: event.lat,
        lng: event.lng
      }
    })
  }

  componentDidMount () {
    const _this = this
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        _this.props.center.lat = position.coords.latitude
        _this.props.center.lng = position.coords.longitude
        _this.setState({
          locationMarker: { lat: position.coords.latitude, lng: position.coords.longitude }
        })
      })
    }
  }

  render () {
    return (
      <div>
        <div style={{ height: '80vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API_KEY,
              libraries: ['places']
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onClick={this.handleClick}
          >
            <Marker
              type="home"
              lat={this.state.locationMarker.lat}
              lng={this.state.locationMarker.lng}
              name="My Location"
              color="red"
            />

            { this.state.schoolMarkers.map((marker, i) => {
              return (
                <Marker
                  key={i}
                  type="school"
                  lat={marker.lat}
                  lng={marker.lng}
                  text={marker.name}
                />
              )
            })}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

LocationMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number
}

export default LocationMap
