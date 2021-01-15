import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'

function LocationList (props) {
  // Change location when center map button is clicked
  const handleClick = (e, loc) => {
    e.preventDefault()
    props.onLocationChange({ lat: loc.latitude, lng: loc.longitude })
  }

  // If props.locations is empty, show message
  if (_.isEmpty(props.locations)) {
    return (
      <div><p>No schools within range</p></div>
    )
  }

  return (
    <div className="list-table">
      { props.locations.length > 0 &&
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">School</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Distance</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            { props.locations.map((loc, i) =>
              <tr key={'row' + i}>
                <td><img className="thumbnail" src={loc.image_url}></img></td>
                <td>{loc.name}</td>
                <td>{loc.city}</td>
                <td>{loc.state}</td>
                <td>{parseFloat(loc.distance).toFixed(0)} miles</td>
                <td><button key={'button' + i} onClick={(e) => handleClick(e, loc)}>Center Map</button></td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </div>
  )
}

LocationList.propTypes = {
  locations: PropTypes.array,
  location: PropTypes.object,
  onLocationChange: PropTypes.func
}

export default LocationList
