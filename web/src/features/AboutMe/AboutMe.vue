<template>
  <div class="full-width-container">
    <div class="about-me-container">
      <div id="about-us" class="about-me-description">
        <img class="portrait" src="@/assets/portrait.png" />
        <div class="content">
          <h2>{{ globalTranslations.features.aboutUs.title }}</h2>
          <div :v-html="globalTranslations.features.aboutUs.text">{{ globalTranslations.features.aboutUs.text }}</div>
        </div>
      </div>
    </div>
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
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

@media only screen and (max-width: 600px) {
  .about-me-description {
    flex-wrap: wrap-reverse;
  }
}

.full-width-container {
    position: relative;
    background-color: #7D8070;
    transform: translateX(-50%);
    margin: 0 auto;
    left: 50%;
    right: 50%;
    width: 100vw; 
}

.content {
  display: flex;
  flex-direction: column;
  color: $white;
  white-space: pre-line; /* or pre-line */
  gap:32px;
}

.about-me-container {
  background-color: $primary;
  max-width: 950px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  padding:32px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.about-me-description {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 36px;
  display: inline-flex;
  align-items: center;
}

.portrait {
  width: calc(50vw - 64px);
  max-width: 475px;
  flex: 1 1 0; 
  border-radius: 24px
}


</style>