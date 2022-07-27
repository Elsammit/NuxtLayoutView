<template>
    <div class="convolution">
        <div class="BaseBox20">下地</div>
        <div class="UponLeft20">左重畳</div>
        <div class="UponCenter20">中央重畳</div>
        <div class="UponRihgt20">右重畳</div>
    </div>
</template>

<style>


    .BaseBox20{
        margin:15px;
        height:260px;
        width:260px;
        text-align: var(--td-text-align);
        background-color: var(--area1-background-color);
        color:#FFF;
    }

    .UponLeft20, .UponCenter20, .UponRihgt20{
        text-align: var(--td-text-align);
        background-color: var(--area2-background-color);
        text-align: center;
        vertical-align: middle;
        position: absolute;
        width: 60px;
        height:50px;
        bottom:30px;
    }

    .UponLeft20{
        left:40px;
    }

    .UponCenter20{
        left:120px;
    }

    .UponRihgt20{
        left:200px;
    }

</style>