import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/locales/i18n'
import { globalTranslations } from '@/locales/i18n'
import type { Translations } from '@/locales/Translations'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)

app.config.globalProperties.$globalTranslations = globalTranslations.value as Translations

app.mount('#app')
