<template>
  <section class="timer">
    <time class="text timer-text" :datetime="time">{{ time }}</time>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Timer',
  data() {
    return {
      message: '',
      time: 6,
    };
  },
  created() {
    this.countTime();
  },
  methods: {
    ...mapMutations({
      setTime: 'setTime',
      restoreSteps: 'restoreSteps',
    }),
    countTime() {
      if (this.time > 0) {
        setTimeout(() => {
          this.time -= 1;
          this.countTime();
          this.setTime(this.time);
        }, 1000);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.timer
  width: 40%
  margin: 0 auto
  margin-top: 2em
  display: flex
  justify-content: center
  flex-wrap: wrap
  &-text
    margin: 0
.none-text
  display: none
</style>
