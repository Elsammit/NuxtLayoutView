<template>
  <input v-model="inputValue" />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        context.emit('update:modelValue', value);
        context.emit('CheckResult');
      },
    });
    return { inputValue };
  },
};

// const test = await fetch(`http://localhost:3000/data.json`);
// console.log(test);
</script>
