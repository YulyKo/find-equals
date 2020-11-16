<template>
  <main class="page page--dark">
    <h1 class="title">Welcome to game!</h1>
    <game-panel></game-panel>
  </main>
</template>

<script>
import GamePanelVue from './GamePanel.vue';

export default {
  name: 'Home',
  components: {
    gamePanel: GamePanelVue,
  },
};
</script>

<style lang="sass" scoped>
@import '@/main'

.page
  height: 100vh
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  &--dark
    background-color: $black
</style>
