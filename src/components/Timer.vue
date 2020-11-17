<template>
  <section class="timer">
    <time class="text timer-text" :datetime="time">{{ time }}</time>
    <p class="text timer-message" :class="{'none-text': message === ''}">{{ message }}</p>
  </section>
</template>

<script>
import { TIME_OVER } from '@/utils/messages';

export default {
  name: 'Timer',
  data() {
    return {
      message: '',
      time: 2,
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
  margin-top: 2em
  display: flex
  justify-content: center
  flex-wrap: wrap
  &-text
    margin: 0
  &-message
    @extend .timer-text
    margin-left: 2rem
.none-text
</style>
