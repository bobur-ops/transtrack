import { create } from 'zustand'

interface ILangStore {
  lang: 'en' | 'ru'
  toggleLang: () => void
}

export const useLangStore = create<ILangStore>(set => ({
  lang: 'en',
  toggleLang: () => set(state => ({ lang: state.lang === 'en' ? 'ru' : 'en' })),
}))
