import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function SearchBox (props) {
  // console.log(props)
  useEffect(() => {
    const { map, mapApi } = props
    console.log(mapApi)
    props.searchBox = new mapApi.places.SearchBox(props.searchInput)
    props.searchBox.addListener('places_changed', onPlacesChanged)
    props.searchBox.bindTo('bound', map)

    return mapApi.event.clearInstanceListeners(props.searchInput)
  })

  const onPlacesChanged = ({ map, addPlace } = props) => {
    const selected = props.searchBox.getPlaces()
    const { 0: place } = selected
    if (!place.geometry) return
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport)
    } else {
      map.setCenter(place.geometry.viewport)
      map.setZoom(17)
    }

    addPlace(selected)
    props.searchInput.blur()
  }

  const clearSearchBox = () => {
    props.searchInput.value = ''
  }

  return (
    <input
      ref={(ref) => {
        props.searchInput = ref
      }}
      type="text"
      onFocus={clearSearchBox}
      placeholder="Enter a location"
    />
  )
}

SearchBox.propTypes = {
  map: PropTypes.object,
  mapApi: PropTypes.func,
  searchInput: PropTypes.text,
  searchBox: PropTypes.func,
  onPlacesChanged: PropTypes.func
}

export default SearchBox
