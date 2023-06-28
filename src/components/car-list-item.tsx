import { HStack, Text } from 'native-base'
import { CarType } from '../store/carStore'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../config/routes'

interface IProps {
  car: CarType
  setSelecetedCar: (val: CarType) => void
}

const CarListItem: React.FC<IProps> = ({ car, setSelecetedCar }) => {
  const navigation = useNavigation()

  const handlePressCar = () => {
    setSelecetedCar(car)
    navigation.navigate(ROUTES.TRANSPORTSCREEN)
  }

  return (
    <HStack
      onTouchEnd={handlePressCar}
      alignItems={'center'}
      justifyContent={'center'}
      borderBottomColor={'gray.300'}
      borderBottomWidth={1}
      py={2}
    >
      <Text width={'30%'} fontSize={16}>{`ТС: ${car.id}`}</Text>
      <Text width={'30%'} fontSize={16}>
        {car.driverName}
      </Text>
      <Text width={'30%'} fontSize={16}>
        {car.category}
      </Text>
    </HStack>
  )
}

export default CarListItem
