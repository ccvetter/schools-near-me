import React, { useEffect, useState } from 'react'
import './App.css'
import LocationMap from './components/LocationMap'
import LocationList from './components/LocationList'
import 'bootstrap/dist/css/bootstrap.min.css'

// class App extends Component {
function App () {
  const [appState, setAppState] = useState({
    loading: false,
    locations: null
  })
  // constructor () {
  //   super()
  //   this.handleClick = this.handleClick.bind(this)
  // }

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = 'http://localhost:4000/schools'

    fetch(apiUrl)
      .then((res) => res.json())
      .then((locations) => {
        console.log(locations)
        setAppState({ loading: false, locations: locations })
      })
  }, [setAppState])

  // handleClick (event) => {
  //   console.log(event)
  // }

  // render () {
  return (
    <div className="App">
      <LocationMap></LocationMap>
      <LocationList locations={appState.locations}></LocationList>
    </div>
  )
  // }
}

export default App
