<template>
<div>
    <div>
        <label for="inputText">文字列入力</label>
        <input type="text" v-model="inputText" class="inputText" />
        <input type="button" @click="generate" value="QRコード作成" />
    </div>
    <VueQrcode v-if="targetText" :value="targetText" :option="option" tag="img" />
</div>
</template>

<script>
    import { createApp } from 'vue';
    import VueQrcode from "@chenfengyuan/vue-qrcode";

    // const app = createApp({});
    // app.component(VueQrcode.name, VueQrcode);

    export default{
        components:{ VueQrcode },
        setup(){
            const inputText = ref("Hello");
            const targetText = ref("World");
            const option = {
                errorCorrectionLevel: "M",
                maskPattern:0,
                margin:10,
                scale:2,
                width:300,
                color:{
                    dark:"#000000FF",
                    light:"#FFFFFFFF"
                }
            };
            const generate = () =>{
                targetText.value = inputText.value;
            }

            const qrCode = VueQrcode;

            return {inputText, targetText, option, generate, qrCode}
        }
    }
</script>

<style>
</style>