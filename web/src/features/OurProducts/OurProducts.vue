<template>
  <div class="our-products-container">
    <div>
      <div class="our-products-title"><h2 id="our-products">{{ globalTranslations.features.ourProducts.title }}</h2></div>
      <div class="line"/>
    </div>
    <div class="our-products">
      <div class="product row">
        <div class="product-text">
          <h2>{{ globalTranslations.features.ourProducts.products.bread.title }}</h2>
          <span> {{ globalTranslations.features.ourProducts.products.bread.description  }}</span>
        </div>
        <img src="@/assets/bread.png"/>
      </div>
      <div class="product row-reverse">
        <div class="product-text">
          <h2>{{ globalTranslations.features.ourProducts.products.cheese.title }}</h2>
          <span> {{ globalTranslations.features.ourProducts.products.cheese.description  }}</span>
        </div>
        <img src="@/assets/cheese.png"/>
      </div>
      <div class="product row">
        <div class="product-text">
          <h2>{{ globalTranslations.features.ourProducts.products.meat.title }}</h2>
          <span> {{ globalTranslations.features.ourProducts.products.meat.description  }}</span>
        </div>
        <img src="@/assets/meat.png"/>
      </div>
      <div class="product row-reverse">
        <div class="product-text">
          <h2>{{ globalTranslations.features.ourProducts.products.other.title }}</h2>
          <span> {{ globalTranslations.features.ourProducts.products.other.description  }}</span>
        </div>
        <img src="@/assets/other.png"/>
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

@media only screen and (max-width: 800px) {
  .our-products {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .product {
    flex-direction: column !important;
  }
  .reverse {
    flex-direction: column !important;
  }
}

h2 {
  color: $primary;
}


.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px  $primary solid
}

.our-products {
  margin-top: 12px;
  padding-left: 64px;
  padding-right: 64px;
  display: flex;
  flex-direction:column;
  gap: 12px;
}

.product {
  display: flex;
  align-items: center;
  gap:32px;
  .product-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

</style>