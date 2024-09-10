import { Translations } from './src/locales/Translations'

declare module 'vue' {
  interface GlobalProperties {
    $globalTranslations: Translations; // Change 'any' to the actual type if you have a specific type for globalTranslations.
  }
}