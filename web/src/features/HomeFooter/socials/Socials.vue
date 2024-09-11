<template>
  <div class="socials-container">
    <a :href="globalTranslations.features.homeFooter.socials.instagram.url" >
      <img src="@/assets/instagram.svg"/>
      <span>{{ globalTranslations.features.homeFooter.socials.instagram.name }}</span>
    </a>
    <a :href="globalTranslations.features.homeFooter.socials.facebook.url">
      <img src="@/assets/facebook.svg"/>
      <span>{{ globalTranslations.features.homeFooter.socials.facebook.name }}</span>
    </a>
    <a :href="`mailto:${globalTranslations.features.homeFooter.socials.mail.url}`"> 
      <img src="@/assets/mail.svg"/>
      <span>{{ globalTranslations.features.homeFooter.socials.mail.name }}</span>
    </a>  
  </div>
</template>

<script lang="ts">
import { globalTranslations } from '@/locales/i18n';
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    globalTranslations() {
      return globalTranslations.value
    }
  },
});
</script>

<style lang="scss">
@import '@/styles/index.scss';

.socials-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    display: flex;
    gap: 32px;
    align-items: center;
    span {
      overflow-wrap: anywhere;
      color: $white;
  }
}
}
</style>