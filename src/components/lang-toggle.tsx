import React from 'react'
import { Text, HStack, Switch } from 'native-base'
import { useLangStore } from '../store/langStore'

interface IProps {
  setLanguage: (value: string) => void
}

const LangToggle: React.FC<IProps> = ({ setLanguage }) => {
  const { lang } = useLangStore(state => ({
    lang: state.lang,
  }))

  return (
    <HStack space={2} alignItems="center">
      <Text fontSize={18}>EN</Text>
      <Switch
        isChecked={lang === 'ru'}
        onToggle={() => {
          setLanguage(lang === 'ru' ? 'en' : 'ru')
        }}
      ></Switch>
      <Text fontSize={18}>RU</Text>
    </HStack>
  )
}

export default LangToggle
