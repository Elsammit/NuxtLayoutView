<template>
    <div class="field">
        <div class="LeftArea17">左側</div>
        <div class="Upper17">
            <div class="UpperArea17">上段</div>
            <div class="Center17">
                <div class="field">
                    <div class="CenterArea17">中央</div>
                    <div class="RightArea17">右側</div>
                </div>
            </div>
        </div>
    </div>
    <div class="UnderArea17">下段</div>
</template>

<style>
.LeftArea17{
  flex:.5;
  height:200px;
  text-align: var(--td-text-align);
  background-color: var(--area4-background-color);
  color:#FFF;
  margin-right: 10px;
}

.Upper17, .Center17{
  flex:1.5;
}

.UpperArea17{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
  flex:1.5;
}

.CenterArea17{
  flex:1.5;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 130px;
  width:30px;
}

.RightArea17{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 130px;
  width:30px;
  color:#FFF;
  margin-left: 10px;
}

.UnderArea17{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
  flex:1.5;
}
</style>