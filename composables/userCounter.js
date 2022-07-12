import { ref, readonly } from 'vue';
const count = ref(0);

export default () => {
  const goodMessage = ref('aaa');
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
