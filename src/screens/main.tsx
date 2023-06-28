import * as React from 'react'
import { Text, Box, Center, VStack, Button } from 'native-base'

const MainScreen = () => {
  return (
    <Center backgroundColor={'blueGray.50'} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <Box>
          <Text fontSize={32}>Hello World</Text>
        </Box>
      </VStack>
    </Center>
  )
}

export default MainScreen
