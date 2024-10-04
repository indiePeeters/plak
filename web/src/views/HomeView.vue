<template>
  <main>
      <div class="content">
        <HomeHeader/>
        <AboutMe/>
        <OurProducts/>
        <HomeFooter/>
      </div>
  </main>
</template>

<script setup lang="ts">
import AboutMe from '@/features/AboutMe/AboutMe.vue'
import HomeHeader from '@/features/HomeHeader/HomeHeader.vue'
import HomeFooter from '@/features/HomeFooter/HomeFooter.vue'
import OurProducts from '@/features/OurProducts/OurProducts.vue';
import { useHead } from '@vueuse/head'
import { globalTranslations } from '@/locales/i18n'

useHead({
  title: globalTranslations.value.meta.title,
  meta: [
    {
      name: 'description',
      content: globalTranslations.value.meta.description
    }
  ]
});

</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .content {
    position: relative;
    padding-left: 8px;
    padding-right: 8px;
    width: calc(100% - 32px) !important
  }
}

.content {
  position: relative;
  margin-top: 32px;
  margin-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 1080px;
  width: 100%;
}
</style>


