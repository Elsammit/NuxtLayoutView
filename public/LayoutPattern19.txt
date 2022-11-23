<template>
    <div class="UpperArea19">上段</div>
    <div class="field">
        <div class="LeftArea19">
            <div class="CenterArea19">左側中央</div>
            <div class="field">
                <div class="UnderLeft19">左下段</div>
                <div class="UnderRight19">右下段</div>
            </div>
        </div>
        <div class="RightArea19">右側中央</div>
    </div>
</template>

<style>
.UpperArea19{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea19{
  flex: 1.5;
}

.RightArea19{
  flex:.3;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 200px;
  width:20px;
  color:#FFF;
}

.CenterArea19{
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  margin-bottom: 10px;
  height:140px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.UnderLeft19, .UnderRight19{
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  height:50px;
  width:110px;
  margin-right: 10px;
}
</style>