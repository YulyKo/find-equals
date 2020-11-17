<template>
  <game-over-panel></game-over-panel>
</template>

<script>
import GameOverPanelVue from '../components/GameOverPanel.vue';

export default {
  name: 'GameOverPage',
  components: {
    gameOverPanel: GameOverPanelVue,
  },
};
</script>
