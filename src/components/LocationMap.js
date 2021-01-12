import React, { Component } from 'react'
import GoogleMapReact from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%'
}

class LocationMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      center: {
        lat: 0,
        long: 0
      },
      zoom: 11
    }
  }

  componentDidMount () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is:', position.coords.latitude)
        console.log('Longitude is:', position.coords.longitude)
        this.setState({ center: { lat: position.coords.latitude } })
        this.setState({ center: { long: position.coords.longitude } })
      })
    } else {
      console.log('Not Available')
    }
  }

  render () {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
    return (
      <></>
      // <div style={mapStyles}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
      //     defaultCenter={this.state.center}
      //     defaultZoom={this.state.zoom}
      //   ></GoogleMapReact>
      // </div>
    )
  }
}

export default LocationMap

