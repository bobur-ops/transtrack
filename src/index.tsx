import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main'
import TransportScreen from './screens/transport-screen'
import SettingsScreen from './screens/settings-screen'
import { ROUTES } from './config/routes'

const Drawer = createDrawerNavigator()

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState(ROUTES.MAIN)

  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
      }}
    >
      <Drawer.Screen name={ROUTES.MAIN} component={MainScreen} />
      <Drawer.Screen
        name={ROUTES.TRANSPORTSCREEN}
        component={TransportScreen}
      />
      <Drawer.Screen name={ROUTES.SETTINGSCREEN} component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default App
