<template>
  <h1>ChildComponent1</h1>
</template>

<script>
const test = await fetch(`http://localhost:3000/data.json`);
console.log(test);
</script>
