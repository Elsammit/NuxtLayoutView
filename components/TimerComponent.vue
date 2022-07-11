<template>
  {{ timer }}
  <button @click="clickHandler">start</button>
</template>

<script>
export default {
  setup(props, context) {
    const timer = ref(10);
    const clickHandler = () => {
      context.emit('child-clicked');
      const timerInterval = setInterval(() => {
        timer.value -= 1;
        if (timer.value <= 0) {
          clearInterval(timerInterval);
          alert('finish');
        }
      }, 1000);
    };
    return { timer, clickHandler };
  },
};
</script>
