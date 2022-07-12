<template>
  <div>
    <button class="startGameBtn" @click="clickHandler">start</button>
    <div class="startTimerArea">残り：{{ timer }}秒</div>
  </div>
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
          timer.value = 0;
          alert('finish');
          timer.value = 10;
        }
      }, 1000);
    };
    return { timer, clickHandler };
  },
};
</script>

<style>
.startGameBtn {
  float: left;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  margin-right: 20px;
}

.startTimerArea {
  margin-left: 30px;
  font-size: 32px;
}
</style>
