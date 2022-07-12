import { ref, readonly } from 'vue';
const count = ref(0);
const goodMessage = ref('aaa');

export default () => {
  const increment = () => {
    count.value++;
    goodMessage.value = 'good!!!';
    console.log(goodMessage.value);
    setTimeout(() => {
      goodMessage.value = '';
    }, 500);
  };

  return { count: readonly(count), increment, goodMessage };
};
