<template>
  {{ SuccessCount }}
  <br />
  {{ goodMessage }}
</template>

<script>
export default {
  props: {
    modelValue: Number,
  },
  setup(props, context) {
    let goodMessage = ref('aaa');
    const SuccessCount = computed({
      get: (){
        goodMessage.value = 'good!!!';
        console.log(goodMessage.value);
        setTimeout(() => {
          goodMessage.value = '';
        }, 500);
        return props.modelValue,
      },
      set: (value) => {
        context.emit('update:modelValue', value);
        // goodMessage.value = 'good!!!';
        // console.log(goodMessage.value);
        // setTimeout(() => {
        //   goodMessage.value = '';
        // }, 500);
      },
    });
    return { SuccessCount, goodMessage };
  },
};
</script>
