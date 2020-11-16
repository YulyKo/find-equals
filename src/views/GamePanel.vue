<template>
  <main class="panel flex">
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>

    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>

    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
    <cards-vue>1</cards-vue>
  </main>
</template>

<script>
import CardVue from '@/components/Card.vue';

export default {
  name: 'GamePanel',
  components: {
    cardsVue: CardVue,
  },
};
</script>

<style lang="sass" scoped>
@import '@/main'

.panel
  margin: 0 auto
  margin-top: 2em
  width: $panel-width
  flex-wrap: wrap
</style>
