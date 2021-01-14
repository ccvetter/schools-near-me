import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'

function LocationList (props) {
  const handleClick = (e, loc) => {
    e.preventDefault()
    props.onLocationChange({ lat: loc.latitude, lng: loc.longitude })
  }

  if (_.isEmpty(props.locations)) {
    return (
      <div><p>No schools within range</p></div>
    )
  }

  return (
    <div>
      { props.locations.length > 0 &&
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">School</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            { props.locations.map((loc, i) =>
              <tr key={loc.lat}>
                <td key={'image' + i}><img key={loc.image_url} className="thumbnail" src={loc.image_url}></img></td>
                <td key={'name' + i}>{loc.name}</td>
                <td key={'city' + i}>{loc.city}</td>
                <td key={'state' + i}>{loc.state}</td>
                <td key={loc}><button onClick={(e, location) => handleClick(e, loc)}>Center Map</button></td>
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
  onLocationChange: PropTypes.func
}

export default LocationList
