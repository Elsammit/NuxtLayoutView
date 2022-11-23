<template>
    <div class="UpperArea13">上段</div>
    <div class="field">
        <div class="LeftArea13">左側中央</div>
        <div class="RightArea13">
            <div class="CenterArea13">右側中央</div>
            <div class="UnderArea13">右側下段</div>
        </div>
    </div>
</template>

<style>
.UpperArea13{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea13{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 200px;
  width:30px;
  color:#FFF;
}

.RightArea13{
  flex: 1.5;
}

.CenterArea13{
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  margin-bottom: 10px;
  height:95px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.UnderArea13{
  height:95px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-left: 10px;
}
</style>