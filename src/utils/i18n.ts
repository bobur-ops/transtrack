import { I18n } from 'i18n-js'

import english from '../lang/en.json'
import russian from '../lang/ru.json'

export const i18n = new I18n({
  en: english,
  ru: russian,
})

i18n.locale = 'en'
