import React from 'react'
import { Text, HStack, Switch } from 'native-base'
import { useLangStore } from '../store/langStore'

const LangToggle = () => {
  const { lang, switchLang } = useLangStore(state => ({
    lang: state.lang,
    switchLang: state.toggleLang,
  }))

  return (
    <HStack space={2} alignItems="center">
      <Text fontSize={18}>EN</Text>
      <Switch isChecked={lang === 'ru'} onToggle={switchLang}></Switch>
      <Text fontSize={18}>RU</Text>
    </HStack>
  )
}

export default LangToggle
