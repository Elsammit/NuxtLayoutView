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
        <!-- 三分割 上2分割 -->
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
      <tr>
        <!-- 4分割 上・中央2・下 -->
        <td class="Column">
          <div class="UpperArea7">
            上段
          </div>
          <div class="field">
            <div class="LeftArea7">
              中央左側
            </div>
            <div class="RightArea7">
              中央右側
            </div>
          </div>
          <div class="UnderArea7">
            下段
          </div>
        </td>
        <!-- 4分割 上段・中央3 -->
        <td class="Column">
          <div class="UpperArea8">
            上段
          </div>
          <div class="field">
            <div class="LeftArea8">
              左側
            </div>
            <div class="CenterArea8">
              中央
            </div>
            <div class="RightArea8">
              右側
            </div>
          </div>
        </td>
        <!-- 4分割 中央3 下段 -->
        <td class="Column">
          <div class="field">
            <div class="LeftArea9">
              左側
            </div>
            <div class="CenterArea9">
              中央
            </div>
            <div class="RightArea9">
              右側
            </div>
          </div>
          <div class="UnderArea9">
            下段
          </div>
        </td>
      </tr>
      <tr>
        <!-- 4分割 左右 左3段階分割 -->
        <td class="Column">
          <div class="field">
            <div class="LeftArea10">
              <div class="UpperArea10">
                左上段
              </div>
              <div class="CenterArea10">
                左側中央
              </div>
              <div class="UnderArea10">
                左側下段
              </div>
            </div>
            <div class="RightArea10">
              右側
            </div>
          </div>
        </td>
        <!-- 4分割 左右 右3段階分割 -->
        <td class="Column">
          <div class="field">
            <div class="LeftArea11">左側</div>
            <div class="RightArea11">
              <div class="UpperArea11">右上段</div>
              <div class="CenterArea11">右中央</div>
              <div class="UnderArea11">右下段</div>
            </div>
          </div>
        </td>
        <!-- 4分割 上段 中央以下左右2分割 -->
        <td class="Column">
          <div class="UpperArea12">上段</div>
          <div class="field">
            <div class="LeftArea12">
              <div class="CenterArea12">左側中央</div>
              <div class="UnderArea12">左側下段</div>
            </div>
            <div class="RightArea12">右側中央</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="Column">
          <div class="UpperArea13">上段</div>
          <div class="field">
            <div class="LeftArea13">左側中央</div>
            <div class="RightArea13">
              <div class="CenterArea13">右側中央</div>
              <div class="UnderArea13">右側下段</div>
            </div>
          </div>
        </td>
        <td class="Column">
          <div class="UpperArea14">上段</div>
          <div class="field">
            <div class="CenterLeft14">左側</div>
            <div class="CenterArea14">中央</div>
            <div class="CenterRight14">右側</div>
          </div>
          <div class="UnderArea14">下段</div>
        </td>
        <td class="Column">
          <div class="UpperArea15">上段</div>
          <div class="field">
            <div class="LeftArea15">
              <div class="field">
                <div class="CenterLeft15">左側</div>
                <div class="CenterArea15">中央</div>
              </div>
              <div class="UnderArea15">下段</div>
            </div>
            <div class="RightArea15">右側</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="Column">

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
  --area4-background-color:#909090;
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

/* #region Area3 */

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

/* #endregion */

/* #region Area4 */

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

/* #endregion */

/* #region Area5 */

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
/* #endregion */

/* #region Area6 */

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
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
}
/* #endregion */

/* #region Area7 */

.UpperArea7{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea7, .RightArea7{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 120px;
  width:80px;
}
.LeftArea7{
  margin-right: 10px;
}

.UnderArea7{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}
/* #endregion */

/* #region Area8 */

.UpperArea8{
  height:80px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.LeftArea8, .CenterArea8, .RightArea8{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 150px;
  width:50px;
}

.LeftArea8, .CenterArea8{
  margin-right: 10px;
}

/* #endregion */

/* #region Area9 */

.LeftArea9, .CenterArea9, .RightArea9{
  flex:1;
  background-color: var(--area2-background-color);
  text-align: var(--td-text-align);
  height: 150px;
  width:50px;
}

.LeftArea9, .CenterArea9{
  margin-right: 10px;
}

.UnderArea9{
  height:50px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}

/* #endregion */

/* #region Area10 */
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

/* #endregion */

/* #region Area11 */
.LeftArea11{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 260px;
  width:30px;
  color:#FFF;
}

.RightArea11{
  flex:1.5;
}

.UpperArea11{
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.CenterArea11{
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  margin-bottom: 10px;
}

.UnderArea11{
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
}

.UpperArea11, .CenterArea11, .UnderArea11{
  height:80px;
  margin-left: 10px;
}
/* #endregion */

/* #region Area12 */
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

/* #endregion */

/* #region Area13 */
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

/* #endregion */

/* #region Area14 */
.UpperArea14{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.UnderArea14{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}

.CenterRight14, .CenterLeft14{
  flex:0.3;
  text-align: var(--td-text-align);
  background-color: var(--area4-background-color);
  height:130px;
  color:#FFF;
}

.CenterArea14{
  flex:1.3;
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  height:130px;
  margin-left: 10px;
  margin-right: 10px;
}

/* #endregion */

/* #region Area15 */
.UpperArea15{
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area1-background-color);
  color:#FFF;
  margin-bottom: 10px;
}

.RightArea15{
  flex:.5;
  background-color: var(--area4-background-color);
  text-align: var(--td-text-align);
  height: 200px;
  width:30px;
  color:#FFF;
  margin-left:10px;
}

.LeftArea15{
  flex:1.5;
}

.UnderArea15{
  flex:1.5;
  height:60px;
  text-align: var(--td-text-align);
  background-color: var(--area3-background-color);
  color:#FFF;
  margin-top: 10px;
}

.CenterArea15{
  flex:1.5;
  text-align: var(--td-text-align);
  background-color: var(--area2-background-color);
  height:130px;
  margin-left: 10px;
}

.CenterLeft15{
  flex:.5;
  height:130px;
  text-align: var(--td-text-align);
  background-color: var(--area4-background-color);
  color:#FFF;
}

/* #endregion */

</style>