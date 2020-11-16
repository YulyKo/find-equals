<template>
  <section class="flex timer">
    <time class="text" :datetime="time">{{ time }}</time>
  </section>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
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
      }
    },
  },
};
</script>

<style>

</style>
