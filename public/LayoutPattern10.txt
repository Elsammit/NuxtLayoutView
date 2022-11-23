<template>
    <div class="field">
        <div class="LeftArea10">
            <div class="UpperArea10">左上段</div>
            <div class="CenterArea10">左側中央</div>
            <div class="UnderArea10">左側下段</div>
        </div>
        <div class="RightArea10">右側</div>
    </div>
</template>

<style>
.LeftArea10{
  flex:1.5;
}

.UpperArea10{
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.CenterArea10{
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  margin-bottom: 10px;
}

.UnderArea10{
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
}

.UpperArea10, .CenterArea10, .UnderArea10{
  height:80px;
  margin-right: 10px;
}

.RightArea10{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 260px;
  width:30px;
  color:#FFF;
}

</style>