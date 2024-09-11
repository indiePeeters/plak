<template>
    <div class="full-width-container">
        <div class="homefooter-container" id="our-products">
                <iframe
                    class="map" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.895532433833!2d5.72421027615531!3d51.36821582086233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c72ffc4c2cd6d9%3A0x2d6c565770df80f5!2sBoerenkamplaan%2054%2C%205712%20AG%20Someren%2C%20Netherlands!5e0!3m2!1sen!2suk!4v1726046271455!5m2!1sen!2suk" 
                    style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            <div class="homefooter-content">
                <OpeningTimes/>
                <Socials/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { globalTranslations } from '@/locales/i18n';
import { defineComponent } from 'vue';
import Socials from '@/features/HomeFooter/socials/Socials.vue'
import OpeningTimes from '@/features/HomeFooter/openingtimes/OpeningTimes.vue';

export default defineComponent({
  components: {
    Socials,
    OpeningTimes
  },
  computed: {
    globalTranslations() {
      return globalTranslations.value
    }
  },
});
</script>

<style lang="scss">
@import '@/styles/index.scss';

@media only screen and (max-width: 800px) {
  .homefooter-container {

    flex-direction: column !important;

    .homefooter-content {
        width: 100% !important;
    }
  }

  .map {
    width: 100% !important;
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

.homefooter-container {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap:32px;
    padding: 32px;
    background-color: $primary;
    .homefooter-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
}
.map {
    border-radius: 24px;
    width: calc(50vw - 64px);
    max-width: 475px;
}
</style>