<template>
    <div class="field">
        <div class="LeftArea9">左側</div>
        <div class="CenterArea9">中央</div>
        <div class="RightArea9">右側</div>
    </div>
    <div class="UnderArea9">下段</div>
</template>
<style>
.LeftArea9, .CenterArea9, .RightArea9{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 150px;
  width:50px;
}

.LeftArea9, .CenterArea9{
  margin-right: 10px;
}

.UnderArea9{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}
</style>