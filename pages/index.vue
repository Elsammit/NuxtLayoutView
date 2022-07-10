<template>
  <div>
    <h1>index page</h1>
    <p>カウント:{{ counter.count }}</p>
    <p>
      <button @click="increment">increment</button>
    </p>
    <ChildComponent1 />
  </div>
</template>

<script>
export default {
  setup() {
    const counter = userCounter();
    const increment = () => {
      counter.increment();
    };
    return {
      counter,
      increment,
    };
  },
};
</script>
