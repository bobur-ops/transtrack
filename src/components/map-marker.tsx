import { Image, View } from 'react-native'

interface IProps {
  carType: string
}

const CustomMarker: React.FC<IProps> = ({ carType }) => {
  const getImageSource = () => {
    switch (carType) {
      case 'Cargo':
        return require('../../assets/Cargo.png')
        break
      case 'Passenger':
        return require('../../assets/Passenger.png')
        break
      case 'Special':
        return require('../../assets/Special.png')
        break

      default:
        break
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={getImageSource()} />
    </View>
  )
}

export default CustomMarker
