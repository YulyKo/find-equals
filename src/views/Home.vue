<template>
  <main>
    <h1>Welcome to game!</h1>
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

<style>

</style>
