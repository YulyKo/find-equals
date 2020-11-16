<template>
  <button type="button"
          class="flex panel__card panel__card--hide">
    <h2 class="text panel__card_text"><slot></slot></h2>
  </button>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="sass" scoped>
@import '@/main.sass'

.panel__card
  margin: 10px
  height: 100px
  width: $card-w
  background-color: $turquoise
  border: none
  &_text
    display: none
  &--show
    box-shadow: inset 0 0 20px $black-ligth, inset 0 0 9px $turquoise
  &--hide
    box-shadow: 0 0 20px $black-ligth, 0 0 9px $turquoise
.text
  margin: auto

</style>
