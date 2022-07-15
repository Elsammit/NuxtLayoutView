

<template>
  <div>
    <input type="text" class="inputArea" v-model="inputValue" />
    <p>test</p>
      
  </div>
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
</script>

<style>
.inputArea {
  font-size: 32px;
}
</style>
