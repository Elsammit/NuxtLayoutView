<template>
    <div class="UpperArea8">上段</div>
    <div class="field">
        <div class="LeftArea8">左側</div>
        <div class="CenterArea8">中央</div>
        <div class="RightArea8">右側</div>
    </div>
</template>

<style>
.UpperArea8{
  height:80px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea8, .CenterArea8, .RightArea8{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 150px;
  width:50px;
}

.LeftArea8, .CenterArea8{
  margin-right: 10px;
}
</style>