<template>
    <div class="UpperArea7">上段</div>
    <div class="field">
        <div class="LeftArea7">中央左側</div>
        <div class="RightArea7">中央右側</div>
    </div>
    <div class="UnderArea7">下段</div>
</template>

<style>
.UpperArea7{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea7, .RightArea7{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 120px;
  width:80px;
}
.LeftArea7{
  margin-right: 10px;
}

.UnderArea7{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}
</style>