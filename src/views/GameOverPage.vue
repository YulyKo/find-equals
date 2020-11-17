<template>
  <main class="page">
    <game-over-panel></game-over-panel>
    <reset-button class="button text">Try again</reset-button>
  </main>
</template>

<script>
import GameOverPanelVue from '../components/GameOverPanel.vue';
import ResetButtonVue from '../components/ResetButton.vue';

export default {
  name: 'GameOverPage',
  components: {
    gameOverPanel: GameOverPanelVue,
    resetButton: ResetButtonVue,
  },
};
</script>

<style lang="sass" scoped>
@import '@/main.sass'

.button
  margin: 0 auto
  display: block
  padding: 1em 0.8em
  border-radius: 12px
  border: 4px solid $turquoise
  background-color: $black
</style>
