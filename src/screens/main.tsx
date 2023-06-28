import * as React from 'react'
import { Text, Center, IconButton, VStack } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { CarsList, MapBlock } from '../components'

const MainScreen = () => {
  const [isMapShown, setIsMapShown] = React.useState(false)

  return (
    <VStack backgroundColor={'blueGray.50'} flex={1}>
      {isMapShown ? <MapBlock /> : <CarsList />}

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
