<template>
    <div class="UpperArea12">上段</div>
    <div class="field">
        <div class="LeftArea12">
            <div class="CenterArea12">左側中央</div>
            <div class="UnderArea12">左側下段</div>
        </div>
        <div class="RightArea12">右側中央</div>
    </div>
</template>

<style>
.UpperArea12{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea12{
  flex: 1.5;
}

.RightArea12{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 200px;
  width:30px;
  color:#FFF;
}

.CenterArea12{
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  margin-bottom: 10px;
  height:95px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.UnderArea12{
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  height:95px;
  margin-right: 10px;
}
</style>