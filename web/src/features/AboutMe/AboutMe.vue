<template>
  <div class="about-me-container">
    <div id="about-us" class="about-me-description">
      <img class="portrait" src="@/assets/portrait.png" />
      <div class="content">
        <h2>{{ globalTranslations.features.aboutUs.title }}</h2>
        <div :v-html="globalTranslations.features.aboutUs.text">{{ globalTranslations.features.aboutUs.text }}</div>
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

.content {
  display: flex;
  flex-direction: column;
  color: $white;
  white-space: pre-line; /* or pre-line */
  gap:32px;
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}

.about-me-container {
  background-color: $primary;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  padding:32px;
  display: inline-flex;
}

.about-me-title-container {
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: inline-flex;
}

.about-me-title {
  width: 114px;
  color: #FFFCF9;
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
   word-wrap: break-word;
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
  width:100%;
  flex: 1 1 0; 
  border-radius: 24px
}


</style>