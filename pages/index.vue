<template>
  <div>
    <h1>HTMLレイアウトサンプル集</h1>
    <div class="field">
      <table>
        <tbody>
          <tr>
            <td class="Column" 
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern1'}">
                <button class="ButtonStyle" @click="viewCode('LayoutPattern1')">
                  <LayoutPattern1 
                    />  <!-- 上下分割 -->
                </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern2'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern2')">
                <LayoutPattern2 />  <!-- 左右分割 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern3'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern3')">
                <LayoutPattern3 />  <!-- 3分割 下2分割 -->
              </button>
            </td>
          </tr>
          <tr>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern4'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern4')">
                <LayoutPattern4 />  <!-- 横3分割 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern5'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern5')">
                <LayoutPattern5 />  <!-- 縦3分割 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern6'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern6')">
                <LayoutPattern6 />  <!-- 三分割 上2分割 -->
              </button>
            </td>
          </tr>
          <tr>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern7'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern7')">
                <LayoutPattern7 />  <!-- 4分割 上・中央2・下 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern8'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern8')">
                <LayoutPattern8 />  <!-- 4分割 上段・中央3 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern9'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern9')">
                <LayoutPattern9 />  <!-- 4分割 中央3 下段 -->
              </button>
            </td>
          </tr>
          <tr>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern10'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern10')">
                <LayoutPattern10 /> <!-- 4分割 左右 左3段階分割 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern11'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern11')">
                <LayoutPattern11 /> <!-- 4分割 左右 右3段階分割 -->
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern12'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern12')">
                <LayoutPattern12 /> <!-- 4分割 上段 中央以下左右2分割 -->
              </button>
            </td>
          </tr>
          <tr>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern13'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern13')">
                <LayoutPattern13 />
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern14'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern14')">
                <LayoutPattern14 />
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern15'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern15')">
                <LayoutPattern15 />
              </button>
            </td>
          </tr>
          <tr>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern16'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern16')">
                <LayoutPattern16 />
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern17'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern17')">
                <LayoutPattern17 />
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern18'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern18')">
                <LayoutPattern18 />
              </button>
            </td>
          </tr>
          <tr>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern19'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern19')">
                <LayoutPattern19 />
              </button>
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern20'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern20')">
                <LayoutPattern20 />
              </button>            
            </td>
            <td class="Column"
              v-bind:class="{'selectedBorder':selectedID==='LayoutPattern21'}">
              <button class="ButtonStyle" @click="viewCode('LayoutPattern21')">
                <LayoutPattern21 />
              </button>            
            </td>
          </tr>
        </tbody>
      </table>
      <div class="SrcViewerArea">
        <p>サンプルプログラム</p>
        <div>
          <!-- <div class="field">
            <button>文字コピー</button>
            <button>ダウンロード</button>
          </div> -->
          {{buffer}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LayoutPattern1 } from '~~/.nuxt/components';
import TestPattern from '~~/components/testFolder/testPattern.vue';

export default{
    async setup(props, context) {
        const textArea = ref(LayoutPattern1["__file"]);
        const selectedID = ref("");
        const readComponent = () => {
            const fileReaderObj = fileReader();
            const readfile = fileReaderObj.FileRead(LayoutPattern1["__file"]);
            console.log(readfile);
            return readfile;
        };
        const FileRead = async function (LayoutNum) {
            const LayoutPath = `/${LayoutNum}.txt`;
            await fetch(LayoutPath, {
                "Content-Type": "text/html",
            }).then(response => response.text())
                .then(data => {
                  buffer.value = data.toString();
                  return data.toString();
                });
            selectedID.value = LayoutNum;
        };
        async function viewCode(LayoutNum) {
            await FileRead(LayoutNum);
        }
        const buffer = ref(" ");
        return { textArea, readComponent, FileRead, buffer, viewCode, selectedID };
    },
    components: { TestPattern }
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

.field{
  display: flex;
}

.convolution{
    position: relative;
}

/* #endregion */

td{
  border:1px solid #333;
  padding:10px;
}

.Column, .ButtonStyle{
  width:300px;
  height:300px;
  text-align: center;
  vertical-align:middle;
  border:2px solid black;

}
.ButtonStyle{
  background-color: #FFF;
  border: none;
}

.ButtonStyle:hover{
  background-color: #505050;
}

/* #tegion SrcViewerArea */
.SrcViewerArea{
  flex:0.5;
  text-align:left;
  position: fixed;
  left: 1000px;
  width: 500px;
}

.SrcViewerArea > p{
  font-weight: bold;
  font-size: 20px;
}

.SrcViewerArea > div{
  flex:0.5;
  background-color: #F5F5F5;
  border-color: #505050;
  border: 3px solid;
  text-align:left;
  position: fixed;
  left: 1000px;
  height:750px;
  width: 450px;
  word-wrap:break-word;
  white-space: pre-wrap;
  overflow-y: scroll;
  padding-left: 10px;
}
/* #endregion */

.selectedBorder{
  background-color: wheat;
  border:2px solid red;
}
</style>