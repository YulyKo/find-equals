<template>
  <main>
    <cards-vue></cards-vue>
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

<style>

</style>
