<template>
  <h1>Aboutページ</h1>
  <div class="field">
    <table>
      <tbody>
        <tr>
          <td class="Column">
            <LayoutPattern1 />  <!-- 上下分割 -->
          </td>
          <td class="Column">
            <LayoutPattern2 />  <!-- 左右分割 -->
          </td>
          <td class="Column">
            <LayoutPattern3 />  <!-- 3分割 下2分割 -->
          </td>
        </tr>
        <tr>
          <td class="Column">
            <LayoutPattern4 />  <!-- 横3分割 -->
          </td>
          <td class="Column">
            <LayoutPattern5 />  <!-- 縦3分割 -->
          </td>
          <td class="Column">
            <LayoutPattern6 />  <!-- 三分割 上2分割 -->
          </td>
        </tr>
        <tr>
          <td class="Column">
            <LayoutPattern7 />  <!-- 4分割 上・中央2・下 -->
          </td>
          <td class="Column">
            <LayoutPattern8 />  <!-- 4分割 上段・中央3 -->
          </td>
          <td class="Column">
            <LayoutPattern9 />  <!-- 4分割 中央3 下段 -->
          </td>
        </tr>
        <tr>
          <td class="Column">
            <LayoutPattern10 /> <!-- 4分割 左右 左3段階分割 -->
          </td>
          <td class="Column">
            <LayoutPattern11 /> <!-- 4分割 左右 右3段階分割 -->
          </td>
          <td class="Column">
            <LayoutPattern12 /> <!-- 4分割 上段 中央以下左右2分割 -->
          </td>
        </tr>
        <tr>
          <td class="Column">
            <LayoutPattern13 />
          </td>
          <td class="Column">
            <LayoutPattern14 />
          </td>
          <td class="Column">
            <LayoutPattern15 />
          </td>
        </tr>
        <tr>
          <td class="Column">
            <LayoutPattern16 />
          </td>
          <td class="Column">
            <LayoutPattern17 />
          </td>
          <td class="Column">
            <LayoutPattern18 />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="SrcViewerArea">{{readComponent()}}</div>
  </div>
</template>

<script>
import { LayoutPattern1 } from '~~/.nuxt/components';

export default{
  setup(props, context) {
    const textArea = ref(LayoutPattern1["__file"]);
    const readComponent = () =>{
      const fileReaderObj = fileReader();
      console.log(LayoutPattern1);
      return fileReaderObj.FileRead(LayoutPattern1["__file"]);
    }
    return {textArea, readComponent};
  },
};
</script>

<style>
/* #region Common */
:root{
  --td-text-align:center;
  --area1-background-color:#1e90ff;
  --area2-background-color:#90ee90;
  --area3-background-color:#ff1e90;
  --area4-background-color:#909090;
  --src-area-background-color:#1e1eff;
}

td{
  border:1px solid #333;
  padding:10px;
}

.Column{
  width:300px;
  height:300px;
}

.field{
  display: flex;
}

/* #endregion */

/* #tegion SrcViewerArea */
.SrcViewerArea{
  flex:0.5;
  background-color: var(--src-area-background-color);
  text-align: var(--td-text-align);
  color:#FFF;
}
/* #endregion */
</style>