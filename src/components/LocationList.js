import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LocationList extends Component {
  render () {
    if (!this.props.locations) {
      return <p>Loading...</p>
    }

    return (
      <div>
        { this.props.locations.length > 0 &&
          <table >
            <thead>
              <tr>
                <th></th>
                <th>School</th>
                <th>City</th>
                <th>State</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.props.locations.map((loc, i) =>
                <tr key={loc.lat}>
                  <td key={'image' + i}><img className="thumbnail" src={loc.image_url}></img></td>
                  <td key={'name' + i}>{loc.name}</td>
                  <td key={'city' + i}>{loc.city}</td>
                  <td key={'state' + i}>{loc.state}</td>
                  <td><button>Center Map</button></td>
                </tr>
              )}
            </tbody>
          </table>
        }
      </div>
    )
  }
}

LocationList.propTypes = {
  locations: PropTypes.array
}

export default LocationList
