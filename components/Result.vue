<template>
  {{ counter.count.value }}
  <br />
  {{ counter.goodMessage.value }}
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
