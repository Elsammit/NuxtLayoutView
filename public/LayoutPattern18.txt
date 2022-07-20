<template>
    <div class="field">
        <div class="Left18">
            <div class="UpperArea18">上段</div>
                <div class="Center18">
                <div class="field">
                    <div class="LeftArea18">左側</div>
                    <div class="CenterArea18">中央</div>
                </div>
            </div>
            <div class="UnderArea18">下段</div>
        </div>
        <div class="RightArea18">右側</div>
    </div>
</template>

<style>
.Left18{
  flex:1.5;
}

.UpperArea18{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
  flex:1.5;
}

.Center18{
  flex:1.5px;
}

.LeftArea18{
  flex:.5;
  height:120px;
  text-align: var(--td-text-align);
  background-color: var(--area4-background-color);
  color:#FFF;
  margin-right: 10px;
}

.CenterArea18{
  flex:1.5;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 120px;
  width:30px;  
}

.UnderArea18{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
  flex:1.5;
}

.RightArea18{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 260px;
  width:30px;
  color:#FFF;
  margin-left: 10px;  
}
</style>