import { Center } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { CarType } from '../store/carStore'
import CustomMarker from './map-marker'

type initialRegionType = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

interface IProps {
  cars: CarType[]
  width: number
  height: number
  initialRegion?: initialRegionType
}

const MapBlock: React.FC<IProps> = ({
  cars,
  width,
  height,
  initialRegion = {
    latitude: 55.751244,
    longitude: 37.618423,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
}) => {
  return (
    <MapView
      style={{ height: `${height}%`, width: `${width}%` }}
      initialRegion={initialRegion}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    >
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{
            latitude: car.location.latitude,
            longitude: car.location.longitude,
          }}
        >
          <CustomMarker carType={car.category} />
        </Marker>
      ))}
    </MapView>
  )
}

export default MapBlock
