import React from 'react'
import { Button, HStack, Icon, Text, VStack } from 'native-base'
import { useCarStore } from '../store/carStore'
import { MapBlock } from '../components'
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons'
import { Linking } from 'react-native'
import { Alert } from 'react-native'

const TransportScreen = () => {
  const { car } = useCarStore(state => ({ car: state.selectedCar }))

  const initialRegion = {
    latitude: car.location.latitude,
    longitude: car.location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const openPhoneApp = (phoneNumber: string) => {
    const phoneUrl = `tel:${phoneNumber}`

    Linking.openURL(phoneUrl)
  }

  const openWhatsAppChat = (driverPhoneNumber: string) => {
    const message =
      'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'

    Linking.openURL(
      `http://api.whatsapp.com/send?text=${message}&phone=${driverPhoneNumber}`
    )
  }

  return (
    <VStack backgroundColor={'blueGray.50'} flex={1}>
      <MapBlock
        width={100}
        height={40}
        cars={[car]}
        initialRegion={initialRegion}
      />
      <VStack mt={4} px={4} space={1}>
        <HStack alignItems={'center'} space={2} mb={2}>
          <MaterialCommunityIcons
            name="truck-cargo-container"
            size={24}
            color="black"
          />
          <Text fontSize={18}>{car.category}</Text>
        </HStack>
        <HStack alignItems={'center'} space={2} mb={2}>
          <Ionicons name="person" size={24} color="black" />
          <Text fontSize={18}>{car.driverName}</Text>
        </HStack>
        <HStack alignItems={'center'} space={2} mb={2}>
          <Entypo name="phone" size={24} color="black" />
          <Text fontSize={18}>{car.contactNumber}</Text>
        </HStack>
        <HStack mt={2} space={2}>
          <Button
            width={100}
            background={'green.800'}
            onPress={() => openPhoneApp(car.contactNumber)}
          >
            <Text color="white">Call</Text>
          </Button>
          <Button
            width={100}
            background={'blue.800'}
            onPress={() => openWhatsAppChat(car.contactNumber)}
          >
            <Text color="white">Message</Text>
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default TransportScreen
