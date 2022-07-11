<template>
  <div>
    <h1>index page</h1>
    <p>カウント:{{ counter.count }}</p>
    <p>
      <button @click="increment">increment</button>
    </p>
    {{ MojiMoji }}
    <TimerComponent @child-clicked="startGame" />
    <br />
    <ChildComponent1 v-model="inputValue" @CheckResult="CheckResult" />
    <br />
    <Result v-model="SuccessCount" />
  </div>
</template>

<script>
export default {
  setup() {
    let MojiMoji = ref('何がでるかな?');
    const inputValue = ref();
    const SuccessCount = ref(0);
    const CheckResult = () => {
      console.log('test');
      if (inputValue.value === MojiMoji.value) {
        MojiMoji.value = randMoji();
        inputValue.value = '';
        SuccessCount.value++;
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
    const counter = userCounter();
    const increment = () => {
      counter.increment();
    };
    return {
      counter,
      increment,
      randMoji,
      MojiMoji,
      startGame,
      CheckResult,
      inputValue,
      SuccessCount,
    };
  },
};
</script>
