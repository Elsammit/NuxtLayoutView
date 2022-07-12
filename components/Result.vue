<template>
  {{ counter.count }}
  <br />
  {{ counte.goodMessage }}
</template>

<script>
export default {
  props: {
    modelValue: Number,
  },
  setup(props, context) {
    const counter = userCounter();
    // const SuccessCount = computed({
    //   get: () => {
    //     goodMessage.value = 'good!!!';
    //     console.log(goodMessage.value);
    //     setTimeout(() => {
    //       goodMessage.value = '';
    //     }, 500);
    //     return props.modelValue;
    //   },
    //   set: (value) => {
    //     context.emit('update:modelValue', value);
    //     // goodMessage.value = 'good!!!';
    //     // console.log(goodMessage.value);
    //     // setTimeout(() => {
    //     //   goodMessage.value = '';
    //     // }, 500);
    //   },
    // });
    return { counter };
  },
};
</script>
