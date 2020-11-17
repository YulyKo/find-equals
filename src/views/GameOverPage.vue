<template>
  <game-over-panel />
</template>

<script>
import GameOverPanel from '@/components/GameOverPanel.vue';

export default {
  name: 'GameOverPage',
  comnponents: {
    gameOverPanel: GameOverPanel,
  },
};
</script>
