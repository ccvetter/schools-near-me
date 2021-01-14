import React, { Component } from 'react'
import './App.css'
import LocationMap from './components/LocationMap'
import LocationList from './components/LocationList'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      locations: null,
      location: { lat: 33.95771196234695, lng: -83.37485924829399 },
      distance: 50
    }

    this.update = this.update.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.changeDistance = this.changeDistance.bind(this)
  }

  changeDistance = (distance) => {
    this.setState({ distance: distance })
  }

  changeLocation (location) {
    this.setState({ location: location })
    const apiUrl = `http://localhost:4000/schools/${location.lat}/${location.lng}/${this.state.distance}`
    this.update(apiUrl)
  }

  componentDidMount () {
    this.setState({ loading: true })

    const apiUrl = `http://localhost:4000/schools/${this.state.location.lat}/${this.state.location.lng}/${this.state.distance}`
    this.update(apiUrl)
  }

  update (apiUrl) {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((locations) => {
        this.setState({ loading: false, locations: locations })
      })
  }

  render () {
    return (
      <div className="App">
        <LocationMap onDistanceChange={this.changeDistance}
          onLocationChange={this.changeLocation}
          locations={this.state.locations}></LocationMap>
        <LocationList locations={this.state.locations}></LocationList>
      </div>
    )
  }
}

export default App
