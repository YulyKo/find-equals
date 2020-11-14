<template>
  <main class="page grid-container">
    <div class="container">
      <h1 class="title">Welcome to game!</h1>
      <game-panel></game-panel>
    </div>
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

<style lang="css" scoped>
.page {
  width: 100%;
  height: 100vh;
}
</style>
