<template>
  <button type="button" @click="resetGame()"><slot></slot></button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ResetButton',
  methods: {
    ...mapMutations({
      restoreSteps: 'restoreSteps',
      setDefaultTime: 'setDefaultTime',
      resetCardsWithNumbers: 'resetCardsWithNumbers',
    }),
    resetGame() {
      this.restoreSteps();
      this.setDefaultTime();
      this.resetCardsWithNumbers();
      this.$router.push('/');
    },
  },
};
</script>
