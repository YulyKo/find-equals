<template>
  <section class="timer">
    <time class="text" :datetime="time">{{ time }}</time>
    <p class="text">{{ message }}</p>
  </section>
</template>

<script>
import { TIME_OVER } from '@/utils/messages';

export default {
  name: 'Timer',
  data() {
    return {
      message: '',
      time: 60,
    };
  },
  created() {
    this.countTime();
  },
  methods: {
    countTime() {
      if (this.time > 0) {
        setTimeout(() => {
          this.time -= 1;
          this.countTime();
        }, 1000);
      } else this.message = TIME_OVER;
    },
  },
};
</script>

<style lang="sass" scoped>
.timer
  width: 40%
  margin: 0 auto
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap
</style>
