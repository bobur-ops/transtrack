import * as React from 'react'
import { Text, Center, IconButton, VStack } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { CarsList, MapBlock } from '../components'
import { useCarStore } from '../store/carStore'

const MainScreen = () => {
  const [isMapShown, setIsMapShown] = React.useState(false)
  const { cars } = useCarStore(state => ({ cars: state.cars }))

  return (
    <VStack backgroundColor={'blueGray.50'} flex={1}>
      {isMapShown ? <MapBlock width={100} height={100} cars={cars} /> : null}
      <CarsList />

      <IconButton
        onPress={() => setIsMapShown(!isMapShown)}
        _icon={{
          as: Feather,
          name: `${isMapShown ? 'list' : 'map'}`,
          size: 6,
          color: 'blue.900',
        }}
        position={'absolute'}
        top={16}
        right={6}
      />
    </VStack>
  )
}

export default MainScreen
