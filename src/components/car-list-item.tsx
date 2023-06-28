import { HStack, Text } from 'native-base'
import { CarType } from '../store/carStore'
import { i18n } from '../utils/i18n'

import allCars from '../config/data.json'

interface IProps {
  car: CarType
  setSelecetedCar: (val: CarType) => void
}

const getCarIndex = (car: CarType) => {
  let index = 0
  allCars.vehicles.forEach((item, idx) => {
    if (item.id === car.id) index = idx + 1
  })

  return index
}

const CarListItem: React.FC<IProps> = ({ car, setSelecetedCar }) => {
  return (
    <HStack
      alignItems={'center'}
      justifyContent={'center'}
      borderBottomColor={'gray.300'}
      borderBottomWidth={1}
      py={2}
    >
      <Text width={'30%'} fontSize={16}>{`ТС: ${getCarIndex(car)}`}</Text>
      <Text width={'30%'} fontSize={16}>
        {car.driverName}
      </Text>
      <Text flex={1} fontSize={16}>
        {i18n.t(car.category)}
      </Text>
    </HStack>
  )
}

export default CarListItem
