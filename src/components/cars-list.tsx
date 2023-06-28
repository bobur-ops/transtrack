import { useState } from 'react'
import { Box, Button, HStack, ScrollView, Text, Pressable } from 'native-base'
import { CarType, useCarStore } from '../store/carStore'
import CarListItem from './car-list-item'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../config/routes'
import { i18n } from '../utils/i18n'

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
  const navigation = useNavigation()

  const handleChangeFilterValue = (value: string) => {
    if (filterValue === value) {
      setFilterValue('')
      resetFilter()
    } else {
      setFilterValue(value)
      filterCarsStore(value)
    }
  }

  const onHandlePress = (car: CarType) => {
    setSelecetedCar(car)
    navigation.navigate(ROUTES.TRANSPORTSCREEN.name)
  }

  return (
    <Box pt={32} px={6}>
      <HStack mb={4} space={2}>
        <Button
          borderColor={'blue.900'}
          onPress={() => handleChangeFilterValue('Cargo')}
          backgroundColor={filterValue === 'Cargo' ? 'blue.900' : 'white'}
          borderWidth={2}
          py={1}
          px={2}
          borderRadius={6}
        >
          <Text color={filterValue === 'Cargo' ? 'white' : 'black'}>
            {i18n.t('Cargo')}
          </Text>
        </Button>
        <Button
          borderColor={'blue.900'}
          onPress={() => handleChangeFilterValue('Passenger')}
          backgroundColor={filterValue === 'Passenger' ? 'blue.900' : 'white'}
          borderWidth={2}
          py={1}
          px={2}
          borderRadius={6}
        >
          <Text color={filterValue === 'Passenger' ? 'white' : 'black'}>
            {i18n.t('Passenger')}
          </Text>
        </Button>
        <Button
          borderColor={'blue.900'}
          onPress={() => handleChangeFilterValue('Special')}
          backgroundColor={filterValue === 'Special' ? 'blue.900' : 'white'}
          borderWidth={2}
          py={1}
          px={2}
          borderRadius={6}
        >
          <Text color={filterValue === 'Special' ? 'white' : 'black'}>
            {i18n.t('Special')}
          </Text>
        </Button>
      </HStack>
      <ScrollView>
        {cars.map(car => (
          <Pressable onPress={() => onHandlePress(car)} key={car.id}>
            <CarListItem car={car} setSelecetedCar={setSelecetedCar} />
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  )
}

export default CarsList
