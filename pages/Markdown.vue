<template>
<div class = "AllArea">
    <input class="InputArea" v-model="inputMsg" />
    <div class="MarkdownArea">
        <article v-html="markdownText"></article>
    </div>
</div>
</template>

<script>
    import {marked} from "marked"

    export default{
        setup(){
            const inputMsg = ref("Inputhere.");
            const markdownText = computed(() => 
                marked.parse(inputMsg.value)
            );

            return {inputMsg, markdownText};
        }
    };

</script>

<style>
.AllArea{
    display: flex;
}

.InputArea, .MarkdownArea{
    height: 500px;
    width: 500px;
    border: 1px solid black;
}

.InputArea{
    background-color: greenyellow;
}

.MarkdownArea{
    margin-left: 10px;
    background-color: aquamarine;
}

</style>