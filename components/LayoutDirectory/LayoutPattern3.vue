<template>
    <div class="UpperArea3">上段</div>
    <div class="field">
        <div class="LeftArea3">左側</div>
        <div class="RightArea3">右側</div>
    </div>
</template>

<style>
.UpperArea3{
  height:90px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea3, .RightArea3{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 100px;
  width:100px;
}

.LeftArea3{
  margin-right:20px;
}
</style>