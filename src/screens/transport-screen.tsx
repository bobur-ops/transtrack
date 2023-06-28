import React from 'react'
import { Box, Center, Text, VStack } from 'native-base'
import { useCarStore } from '../store/carStore'

const TransportScreen = () => {
  const { car } = useCarStore(state => ({ car: state.selectedCar }))

  return (
    <Center backgroundColor={'blueGray.50'} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <Box>
          <Text fontSize={32}>{car.driverName}</Text>
        </Box>
      </VStack>
    </Center>
  )
}

export default TransportScreen
