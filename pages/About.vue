<template>
  <h1>Aboutページ</h1>
  <div class="field">
    <table>
      <tbody>
        <tr>
          <td class="Column">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern1')">
                <LayoutPattern1 />  <!-- 上下分割 -->
              </button>
            </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern2')">
              <LayoutPattern2 />  <!-- 左右分割 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern3')">
              <LayoutPattern3 />  <!-- 3分割 下2分割 -->
            </button>
          </td>
        </tr>
        <tr>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern4')">
              <LayoutPattern4 />  <!-- 横3分割 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern5')">
              <LayoutPattern5 />  <!-- 縦3分割 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern6')">
              <LayoutPattern6 />  <!-- 三分割 上2分割 -->
            </button>
          </td>
        </tr>
        <tr>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern7')">
              <LayoutPattern7 />  <!-- 4分割 上・中央2・下 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern8')">
              <LayoutPattern8 />  <!-- 4分割 上段・中央3 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern9')">
              <LayoutPattern9 />  <!-- 4分割 中央3 下段 -->
            </button>
          </td>
        </tr>
        <tr>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern10')">
              <LayoutPattern10 /> <!-- 4分割 左右 左3段階分割 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern11')">
              <LayoutPattern11 /> <!-- 4分割 左右 右3段階分割 -->
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern12')">
              <LayoutPattern12 /> <!-- 4分割 上段 中央以下左右2分割 -->
            </button>
          </td>
        </tr>
        <tr>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern13')">
              <LayoutPattern13 />
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern14')">
              <LayoutPattern14 />
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern15')">
              <LayoutPattern15 />
            </button>
          </td>
        </tr>
        <tr>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern16')">
              <LayoutPattern16 />
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern17')">
              <LayoutPattern17 />
            </button>
          </td>
          <td class="Column">
            <button class="ButtonStyle" @click="viewCode('LayoutPattern18')">
              <LayoutPattern18 />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="SrcViewerArea">{{buffer}}</div>
  </div>
</template>

<script>
import { LayoutPattern1 } from '~~/.nuxt/components';

export default{
  async setup(props, context) {
    const textArea = ref(LayoutPattern1["__file"]);
    const readComponent = () =>{
      const fileReaderObj = fileReader();
      const readfile = fileReaderObj.FileRead(LayoutPattern1["__file"]);
      console.log(readfile);
      return readfile;
    }
     const FileRead = async function(LayoutNum){
      const LayoutPath = `/${LayoutNum}.txt`;
        await fetch(LayoutPath,{
            "Content-Type": "text/html",
        }).then(response => response.text())
        .then(data =>{
            console.log(data.toString());
            buffer.value = data.toString();
            return data.toString();
        });
    };

    async function viewCode(LayoutNum){
      await FileRead(LayoutNum);
    }
    

    const buffer = ref("aaa");
    
    return {textArea, readComponent, FileRead, buffer, viewCode};
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

.Column, .ButtonStyle{
  width:300px;
  height:300px;
  text-align: center;
  vertical-align:middle;

}
.ButtonStyle{
  background-color: #FFF;
  border: none;
}

.ButtonStyle:hover{
  background-color: #505050;
}

.field{
  display: flex;
}

/* #endregion */

/* #tegion SrcViewerArea */
.SrcViewerArea{
  flex:0.5;
  background-color: var(--src-area-background-color);
  text-align:left;
  color:#FFF;
  position: fixed;
  left: 1000px;
  height:800px;
  width: 500px;
  word-wrap:break-word;
  white-space: pre-wrap;
  overflow-y: scroll;
}
/* #endregion */
</style>