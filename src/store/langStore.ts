import { create } from 'zustand'
import { i18n } from '../utils/i18n'
interface ILangStore {
  lang: 'en' | 'ru'
  toggleLang: () => void
}

export const useLangStore = create<ILangStore>(set => ({
  lang: 'en',
  toggleLang: () =>
    set(state => {
      return { lang: state.lang === 'en' ? 'ru' : 'en' }
    }),
}))
