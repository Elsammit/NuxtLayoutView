<template>
    <div class="field">
        <div class="LeftArea16">
            <div class="CenterLeft16">左側</div>
            <div class="UnderArea16"></div>
        </div>
        <div class="CenterRight16">
            <div class="UpperArea16">上段</div>
            <div class="field">
                <div class="Center16">
                    <div class="CenterArea16">中央</div>
                    <div class="UnderArea16">下段</div>
                </div>
                <div class="RightArea16">右側</div>
            </div>
        </div>
    </div>
</template>

<style>
.LeftArea16{
  flex:.5;
}

.CenterLeft16{
  flex:.5;
  height:200px;
  text-align: var(--td-text-align);
  background-color: var(--area4-background-color);
  color:#FFF;
}

.CenterRight16{
  flex:1.5;
}

.UpperArea16{
  flex:1.5 ;
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
  margin-left: 10px;
}

.Center16{
  flex:1.5;
}

.CenterArea16{
  flex:1.5;
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  height:130px;
  margin-left: 10px;
}

.UnderArea16{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
  flex:1.5;
}

.RightArea16{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 200px;
  width:30px;
  color:#FFF;
  margin-left:10px;
}
</style>