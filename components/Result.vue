<template>
  {{ counter.count.value }}
  <br />
  <img src="~/assets/images.jpg" v-show="counter.goodFlg.value" />
</template>

<script>
export default {
  props: {
    modelValue: Number,
  },
  setup(props, context) {
    const counter = userCounter();
    return { counter };
  },
};
</script>
