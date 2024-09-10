<template>
    <a class="primary-button" @click="onButtonClicked">  {{buttonText}} </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    buttonText: String
  },
  emits: ['click'],
  setup(props, { emit }) {
    emit('click')
  },
  methods: {
    onButtonClicked: () => { }
  }
  
}) 
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.primary-button {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    min-width: 120px;
    border-radius: 24px;
    width: fit-content;
    background-color: $primary;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: $white;
    font-size: 26px;
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    word-wrap: break-word;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.primary-button:hover {
  color: $white;
  transition-duration: 0.1s;
  background-color: $primary-light;
}

.primary-button:after {
  width:10px;
  height:10px;  
  display: block;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.primary-button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.primary-button:active {
  top: 1px;
}
</style>