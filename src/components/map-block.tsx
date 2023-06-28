import { Center } from 'native-base'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const MapBlock = () => {
  return (
    <MapView
      style={{ height: '100%', width: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    />
  )
}

export default MapBlock
