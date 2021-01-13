import React from 'react'
import HomeMarker from './HomeMarker'
import SchoolMarker from './SchoolMarker'

const Marker = (props: any) => {
  switch (props.type) {
    case 'home':
      return <HomeMarker
              lat={props.lat}
              lng={props.lng}
              name={props.name}
              color={props.color}
            />
    case 'school':
      return <SchoolMarker
              lat={props.lat}
              lng={props.lng}
              name={props.name}
            />
  }
}

export default Marker
