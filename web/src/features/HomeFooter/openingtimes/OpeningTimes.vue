<template>
  <div class="openingtimes-container">
    <h2>{{ globalTranslations.features.homeFooter.openingTimes.title }}</h2>
    <div class="daytimes">
      <div class="daytime" v-if="OpenOnDay(0)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.monday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.monday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.monday.until }}</span>
        </div>
      </div>
      <div class="daytime" v-if="OpenOnDay(1)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.tuesday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.tuesday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.tuesday.until }}</span>
        </div>
      </div>
      <div class="daytime" v-if="OpenOnDay(2)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.wednesday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.wednesday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.wednesday.until }}</span>
        </div>
      </div>
      <div class="daytime" v-if="OpenOnDay(3)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.thursday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.thursday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.thursday.until }}</span>
        </div>
      </div>
      <div class="daytime" v-if="OpenOnDay(4)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.friday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.friday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.friday.until }}</span>
        </div>
      </div>
      <div class="daytime" v-if="OpenOnDay(5)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.saturday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.saturday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.saturday.until }}</span>
        </div>
      </div>
      <div class="daytime" v-if="OpenOnDay(0)">
        <span class="dayLabel">{{ globalTranslations.features.homeFooter.openingTimes.daytimes.sunday.day }}</span>
        <div class="time">
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.sunday.from }}</span>
          <span>-</span>
          <span>{{ globalTranslations.features.homeFooter.openingTimes.daytimes.sunday.until }}</span>
        </div>
      </div>
    </div>
    <span class="openingtimes-description">{{ globalTranslations.features.homeFooter.openingTimes.description }}</span>
  </div>
</template>

<script lang="ts">
import { globalTranslations } from '@/locales/i18n';
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        OpenOnDay(dayIndex : number) {
            const daytimes = globalTranslations.value.features.homeFooter.openingTimes.daytimes
            const dayObject = Object.entries(daytimes)
            return dayObject[dayIndex][1].from.length > 0;
        }
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
.openingtimes-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .daytimes {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .daytime {
      color: $white;
      display: flex;
      flex-direction: row;
      gap: 32px;

      .dayLabel {
        min-width: 80px;
      }

      .time {
        display: flex;
        flex-direction: row;
        gap: 16px;
      }
    }
  }

  .openingtimes-description {
    color:white;
  }
}

</style>
