import React from 'react'
import { Marker } from 'react-leaflet'

import UseGeolocation from './UseGeolocation'

const MarkersModal = () => {
  const location= UseGeolocation();
  return (
    
    <Marker />
  )
}

export default MarkersModal