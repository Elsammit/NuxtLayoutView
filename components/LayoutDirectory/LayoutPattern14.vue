<template>
    <div class="UpperArea14">上段</div>
    <div class="field">
        <div class="CenterLeft14">左側</div>
        <div class="CenterArea14">中央</div>
        <div class="CenterRight14">右側</div>
    </div>
    <div class="UnderArea14">下段</div>
</template>

<style>
.UpperArea14{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.UnderArea14{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}

.CenterRight14, .CenterLeft14{
  flex:0.3;
  text-align: var(--td-text-align);
  background-color: var(--area4-background-color);
  height:130px;
  color:#FFF;
}

.CenterArea14{
  flex:1.3;
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  height:130px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>