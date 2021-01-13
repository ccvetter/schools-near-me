import React from 'react'

function LocationList (locations) {
  const schoolList = locations
  console.log(locations)
  return (
    <>
      { schoolList.length > 0 &&
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
            { locations.map((loc, i) =>
              <tr key={loc.lat}>
                <td key={'image' + i}><img className="thumbnail" src={loc.image_url}></img></td>
                <td key={'name' + i}>{loc.name}</td>
                <td key={'city' + i}>{loc.address__city}</td>
                <td key={'state' + i}>{loc.address__state}</td>
                <td><button>Center Map</button></td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  )
}

export default LocationList
