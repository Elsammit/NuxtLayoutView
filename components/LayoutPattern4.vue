<template>
    <div class="field">
        <div class="LeftArea4">
            左側
        </div>
        <div class="CenterArea4">
            中央
        </div>
        <div class="RightArea4">
            右側
        </div>
    </div>
</template>

<style>
.LeftArea4, .CenterArea4, .RightArea4{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 250px;
  width:100px;
}

.LeftArea4, .CenterArea4{
  margin-right: 10px;;
}
</style>