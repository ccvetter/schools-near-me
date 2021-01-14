const loadGMaps = (callback) => {
  const existingScript = document.getElementById('googleMaps')

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places'`

    script.id = 'googleMaps'
    document.body.appendChild(script)

    script.onload = () => {
      if (callback) callback()
    }
  }

  if (existingScript && callback) callback()
}

export default loadGMaps
