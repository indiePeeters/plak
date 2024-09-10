<template>
  <div ref="skillsContainer">
    <div class="home-header">
      <div class="home-header-content">
        <h1 class="home-header-title">{{ globalTranslations.features.homeHeader.title }}</h1>
        <div class="home-header-description"> {{  globalTranslations.features.homeHeader.description }}</div>
        <div class="home-header-buttons">
          <a class="no-underline" @click="scrollIntoView('our-products')"><PrimaryButton :buttonText="globalTranslations.features.homeHeader.primaryAction"/></a>
          <a class="no-underline" @click="scrollIntoView('about-us')"><PrimaryButton :buttonText="globalTranslations.features.homeHeader.secondaryAction"/></a>
        </div>
      </div>
      <img src="@/assets/logo.png"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { globalTranslations } from '@/locales/i18n'

export default defineComponent({
  components: {
    PrimaryButton
  },
  computed: {
    globalTranslations() {
      return globalTranslations.value
    }
  },
  methods: {
    scrollIntoView(scrollTargetName: string) {
      const scrollTarget = document.getElementById(scrollTargetName);
      if (scrollTarget) {
        const offsetTop = scrollTarget.offsetTop;
 
        window.scrollTo({
          top: offsetTop - 32,
          behavior: 'smooth',
        });
      }
    }
  }
})
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {

  .home-header-title {
    width: 100% !important;
    text-align: center;
  }
  .home-header {
    display: flex;
    flex-direction: column-reverse;
    width: 100% !important;
    overflow: hidden !important;
  }
  .home-header-image {
    position:relative !important;
    mix-blend-mode: 'soft-light' !important;
    opacity: 50% !important;
    margin-left:-50% !important;
    width: 200% !important;
    max-height: 70% !important;
  }

  .home-header-buttons {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
}

.no-underline {
  text-decoration: none;
}
.home-header-title-and-image {
  display: flex !important;
}
.home-header-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.home-header-title {
  text-align: center;
}

.home-header-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.home-header-image {
  position:absolute;
  mix-blend-mode: 'soft-light';
  opacity: 50%;
  top: -50px;
  margin-left:380px;
}

.home-header {
  display: flex;
}
</style>