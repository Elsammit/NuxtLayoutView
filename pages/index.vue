<template>
  <div>
    <h1>タイピングゲーム</h1>
    <TimerComponent @child-clicked="startGame" />
    <div class="questionString">
      <p>
        {{ MojiMoji }}
      </p>
      <ChildComponent1 v-model="inputValue" @CheckResult="CheckResult" />
    </div>
    <br />
    <br />
    <Result />
    <!-- ここからレイアウト作成です -->
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/Animation">about</NuxtLink>
    <div class="bodysall">
      <div class="Content">
        <p>Webサイトコンテンツ</p>
      </div>
        <div class="NavigationMenu">
          <p>ナビゲーション</p>
        </div>
    </div>
        <nav>
        <ul>
            <li><a href="#first">first</a></li>
            <li><a href="#second">second</a></li>
            <li><a href="#third">third</a></li>
        </ul>
    </nav>
    <div class="scroll-smooth h-screen w-screen">
        <div id="first" class="h-screen w-screen">1</div>
        <div id="second" class="h-screen w-screen">2</div>
        <div id="third" class="h-screen w-screen">3</div>
    </div>
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

<style>
.questionString {
  font-size: 32px;
  text-align: center;
}

.bodysall{
    display: flex;
    min-height: 100vh;  
}

.NavigationMenu{
    width: 300px;
    text-align: center;
    background-color: #1e90ff;
    color: #fff;
}
.Content{
   flex: 1;
   background-color: #90ee90;
   text-align: center;
   margin-left: 15px;
}
</style>
