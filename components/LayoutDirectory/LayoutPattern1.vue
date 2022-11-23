<template>
    <div class="NavigationMenu1">上部</div>
    <div class="Content1">下部</div>
</template>

<style scoped>
:root{
  --td-text-align:center;
  --area1-background-color:#1e90ff;
  --area2-background-color:#90ee90;
  --area3-background-color:#ff1e90;
  --area4-background-color:#909090;
  --src-area-background-color:#1e1eff;
}

.field{
  display: flex;
}

.convolution{
    position: relative;
}

.NavigationMenu1{
    height: 50px;
    text-align: var(--td-text-align);
    background-color: var(--area1-background-color);
    color: #fff;
    margin-bottom: 10px;
}
.Content1{
    background-color: var(--area2-background-color);
    text-align: var(--td-text-align);
    height: 120px;
}
</style>