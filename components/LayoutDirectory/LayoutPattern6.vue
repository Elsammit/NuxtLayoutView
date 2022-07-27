<template>
    <div class="field">
        <div class="LeftArea6">左側</div>
        <div class="RightArea6">右側</div>
    </div>
    <div class="UnderArea6">下段</div>
</template>

<style>
.RightArea6, .LeftArea6{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 150px;
  width:80px;
  margin-bottom: 10px;
}

.LeftArea6{
  margin-right: 10px;
}

.UnderArea6{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
}
</style>