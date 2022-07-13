import { ref, readonly } from 'vue';
const count = ref(0);
const goodMessage = ref('aaa');
const goodFlg = ref(true);

export default () => {
  const increment = () => {
    count.value++;
    goodMessage.value = 'good!!!';
    goodFlg.value = true;
    console.log(goodFlg);
    console.log(goodMessage.value);
    setTimeout(() => {
      goodMessage.value = '';
      goodFlg.value = false;
    }, 500);
  };

  return { count: readonly(count), increment, goodMessage, goodFlg };
};
