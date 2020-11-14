<template>
  <section class="card">
    <img
      src="@/assets/preview-card.png" alt="card"
      class="card__image">
    <h2 class="text card__text">0</h2>
  </section>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="sass" scoped>
@import '@/main.sass'

.card
  width: 11vh
  height: 17vh
  display: flex
  justify-content: center
  align-items: center
  &__image
    height: 100%
  &__text
    text-align: center
    margin: auto
</style>
