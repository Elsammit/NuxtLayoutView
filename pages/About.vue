<template>
  <h1>Aboutページ</h1>
  <table>
    <tbody>
      <tr>
        <!-- 上下分割 -->
        <td class="Column">
          <div class="NavigationMenu1">
            上部
          </div>
          <div class="Content1">
            下部
          </div>
        </td>
        <!-- 左右分割 -->
        <td class="Column">
          <div class="field">
            <div class="NavigationMenu2">
              左部
            </div>
            <div class="Content2">
              右部
            </div>
          </div>
        </td>
        <!-- 3分割 下2分割 -->
        <td class="Column">
          <div class="UpperArea3">
            上段
            </div>
            <div class="field">
              <div class="LeftArea3">
                左側
              </div>
              <div class="RightArea3">
                右側
              </div>
          </div>
        </td>
      </tr>
      <tr>
        <!-- 横3分割 -->
        <td class="Column">
          <div class="field4">
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
        </td>
        <!-- 縦3分割 -->
        <td class="Column">
          <div class="UpperArea5">
            上部
          </div>
          <div class="CenterArea5">
            中央
          </div>
          <div class="UnderArea5">
            下部
          </div>
        </td>
        <td class="Column">
          <div class="field">
            <div class="LeftArea6">
              左側
            </div>
            <div class="RightArea6">
              右側
            </div>
          </div>
          <div class="UnderArea6">
            下段
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="bodyArea2">

  </div>
</template>

<style>

:root{
  --td-text-align:center;
  --area1-background-color:#1e90ff;
  --area2-background-color:#90ee90;
  --area3-background-color:#ff1e90;
}

td{
  border:1px solid #333;
  padding:10px;
}

.Column{
  width:300px;
  height:300px;
}

.bodyArea2{
  min-height: 100vh;
  width:500px;
}

.NavigationMenu1{
  height: 90px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color: #fff;
}
.Content1{
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
}

.field{
  display: flex;
}

.NavigationMenu2{
  height: 100px;
  width:50px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color: #fff;
}
.Content2{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 100px;
  width:100px;
}

.UpperArea3{
  height:90px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
}

.LeftArea3, .RightArea3{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 100px;
  width:100px;
}

.LeftArea3{
  margin-right:20px;
}

.field4{
  display: flex;
}

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

.UpperArea5, .CenterArea5, .UnderArea5{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 80px;
  width:300px;
}

.UpperArea5, .CenterArea5{
  margin-bottom: 10px;;
}

.RightArea6, .LeftArea6{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 150px;
  width:80px;
}

.LeftArea6{
  margin-right: 10px;
}

.UnderArea6{
  height:90px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
}

</style>