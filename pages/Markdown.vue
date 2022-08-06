<template>
<div class = "AllArea">
    <input class="InputArea" v-model="inputMsg" />
    <div class="MarkdownArea">
        {{inputMsg}}
    </div>
</div>
</template>

<script>
    export default{
        setup(){
            const changeMarkdownObj = changeMarkdown();

            const inputMsg = ref("#Input here.");
            const markdownText = changeMarkdownObj.ChgToMarkdown(inputMsg.value);
            
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