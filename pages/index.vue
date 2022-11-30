<template>
  <div>
    <h1>HTMLレイアウトサンプル集</h1>
    <div class="field">
      <div>レイアウトサンプル</div>
      <div class="selectButtonArea">
        <input type="checkbox" id="selectCheck" checked="" v-model="test"/>
        <label for="selectCheck">
          <div class="selectBox"></div>
        </label>
      </div>
      <div>アニメーションサンプル</div>
    </div>
    <div v-if="test">
      <AnimationMain />
    </div>
    <div v-else>
      <LayoutMain />
    </div>
  </div>
</template>

<script>
  export default{
    setup(){
      const test = ref(false);

      return {test};

    }
  }

</script>

<style>
  .field{
    display: flex;
  }

  .selectButtonArea{
    margin: 20px;
    width:100px;
  }

  .selectButtonArea input{
    display:none;
  }

  .selectButtonArea label{
    display: block;
    box-sizing: border-box;
    text-align: left;
    border: 2px solid #ddd;
    border-radius: 3px;
    line-height: 1;
    height: 50px;
  }

  .selectBox{
    display: inline-block;
    height:46px;
    width: 50%;
    background: #bd7878;
    transition: .3s;
  }


  .selectButtonArea #selectCheck:checked + label .selectBox{
    transform: translateX(100%);
    background: #78bd78;
  }
</style>