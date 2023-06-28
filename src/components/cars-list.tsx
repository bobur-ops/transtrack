import { useState } from 'react'
import { Box, Button, HStack, Text } from 'native-base'
import { useCarStore } from '../store/carStore'
import CarListItem from './car-list-item'

const CarsList = () => {
  const { cars, filterCarsStore, resetFilter, setSelecetedCar } = useCarStore(
    state => ({
      cars: state.cars,
      filterCarsStore: state.filterCars,
      resetFilter: state.resetFilter,
      setSelecetedCar: state.setSelectedCar,
    })
  )
  const [filterValue, setFilterValue] = useState<String>('')

  const handleChangeFilterValue = (value: string) => {
    if (filterValue === value) {
      setFilterValue('')
      resetFilter()
    } else {
      setFilterValue(value)
      filterCarsStore(value)
    }
  }

  return (
    <Box pt={24} px={6}>
      <HStack mb={4} space={2}>
        <Button
          borderColor={'blue.900'}
          onPress={() => handleChangeFilterValue('Cargo')}
          backgroundColor={filterValue === 'Cargo' ? 'blue.900' : 'white'}
          borderWidth={2}
          py={1}
          px={4}
          borderRadius={6}
        >
          <Text color={filterValue === 'Cargo' ? 'white' : 'black'}>Cargo</Text>
        </Button>
        <Button
          borderColor={'blue.900'}
          onPress={() => handleChangeFilterValue('Passenger')}
          backgroundColor={filterValue === 'Passenger' ? 'blue.900' : 'white'}
          borderWidth={2}
          py={1}
          px={4}
          borderRadius={6}
        >
          <Text color={filterValue === 'Passenger' ? 'white' : 'black'}>
            Passenger
          </Text>
        </Button>
        <Button
          borderColor={'blue.900'}
          onPress={() => handleChangeFilterValue('Special')}
          backgroundColor={filterValue === 'Special' ? 'blue.900' : 'white'}
          borderWidth={2}
          py={1}
          px={4}
          borderRadius={6}
        >
          <Text color={filterValue === 'Special' ? 'white' : 'black'}>
            Special
          </Text>
        </Button>
      </HStack>
      {cars.map(car => (
        <CarListItem key={car.id} car={car} setSelecetedCar={setSelecetedCar} />
      ))}
    </Box>
  )
}

export default CarsList
