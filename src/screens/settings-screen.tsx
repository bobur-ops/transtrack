import React from 'react'
import { Box, Center, Text, VStack } from 'native-base'

const SettingsScreen = () => {
  return (
    <Center backgroundColor={'blueGray.50'} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <Box>
          <Text fontSize={32}>Settings Screen</Text>
        </Box>
      </VStack>
    </Center>
  )
}

export default SettingsScreen
