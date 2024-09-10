import { createI18n } from 'vue-i18n';
import translations from './nl'
import type { Translations } from './Translations'
import { ref } from 'vue';

export const globalTranslations = ref<Translations>(translations);

const i18n = createI18n({
  legacy: false,
  locale: 'nl',
  messages: {
    en: globalTranslations.value,
    // Add more locales as needed
  },
});

export default i18n;
