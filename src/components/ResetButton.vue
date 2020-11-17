<template>
  <button type="button" @click="resetGame()"><slot></slot></button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ResetButton',
  methods: {
    ...mapMutations({
      setStep: 'setStep',
      setMessage: 'setMessage',
      setResultTime: 'setResultTime',
      setTime: 'setTime',
    }),
    resetGame() {
      this.setStep(0);
      this.setMessage('');
      this.setResultTime(0);
      this.setTime(0);
      this.$router.push('/');
    },
  },
};
</script>
