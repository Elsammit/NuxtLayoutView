

<template>
  <div>
    <input type="text" class="inputArea" v-model="inputValue" />
    <p>test</p>
    <vue-fake-input
        :length="5"
        :fontSize="40"
        inputColor="#31bce6"
        fontColor="#ffc107"
        :allowPaste="false"
      />
      
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
