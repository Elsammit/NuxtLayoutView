<template>
  <div>
    <h1>index page</h1>
    {{ MojiMoji }}
    <TimerComponent @child-clicked="startGame" />
    <br />
    <ChildComponent1 v-model="inputValue" @CheckResult="CheckResult" />
    <br />
    <Result />
  </div>
</template>

<script>
export default {
  setup() {
    let MojiMoji = ref('何がでるかな?');
    const inputValue = ref();

    const counter = userCounter();

    const CheckResult = () => {
      console.log('test');
      if (inputValue.value === MojiMoji.value) {
        MojiMoji.value = randMoji();
        inputValue.value = '';
        counter.increment();
      }
    };
    const startGame = () => {
      MojiMoji.value = randMoji();
    };
    const randMoji = () => {
      const num = Math.floor(Math.random() * 4);
      const mojiList = [
        'yahoo',
        'melon',
        'pokemon',
        'santa',
        'dorakue',
        'study',
      ];

      return mojiList[num];
    };
    return {
      counter,
      randMoji,
      MojiMoji,
      startGame,
      CheckResult,
      inputValue,
      counter,
    };
  },
};
</script>
