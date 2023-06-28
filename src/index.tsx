import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main'
import TransportScreen from './screens/transport-screen'
import SettingsScreen from './screens/settings-screen'
import { ROUTES } from './config/routes'
import { i18n } from './utils/i18n'
import { Text } from 'native-base'
import { useLangStore } from './store/langStore'

const Drawer = createDrawerNavigator()

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState(
    ROUTES.MAIN.name
  )
  const { switchLang } = useLangStore(state => ({
    switchLang: state.toggleLang,
  }))

  const [language, setLanguage] = useState('en')

  const changeLanguage = (val: string) => {
    setLanguage(val)
    i18n.locale = val
    switchLang()
  }

  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
      }}
    >
      <Drawer.Screen
        name={ROUTES.MAIN.name}
        options={{ drawerLabel: i18n.t(ROUTES.MAIN.label) }}
      >
        {props => <MainScreen language={language} />}
      </Drawer.Screen>
      <Drawer.Screen
        name={ROUTES.TRANSPORTSCREEN.name}
        options={{ drawerLabel: i18n.t(ROUTES.TRANSPORTSCREEN.label) }}
      >
        {props => <TransportScreen language={language} />}
      </Drawer.Screen>
      <Drawer.Screen
        name={ROUTES.SETTINGSCREEN.name}
        options={{ drawerLabel: i18n.t(ROUTES.SETTINGSCREEN.label) }}
      >
        {props => <SettingsScreen setLanguage={changeLanguage} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default App
