<template>
    <div class="convolution">
        <div class="BaseBox21">下地</div>
        <div class="convolution">
            <div class="UponBase21">重畳下地</div>
            <div class="UponBox21">重畳</div>
        </div>
    </div>
</template>

<style>
    .BaseBox21{
        margin:15px;
        height:260px;
        width:260px;
        text-align: var(--td-text-align);
        background-color: var(--area1-background-color);
        color:#FFF;
    }

    .UponBase21{
        text-align: var(--td-text-align);
        background-color: var(--area2-background-color);
        text-align: center;
        vertical-align: middle;
        position: absolute;
        width: 180px;
        height:180px;
        bottom:50px;
        left:60px;
    }

    .UponBox21{
        text-align: var(--td-text-align);
        background-color: var(--area3-background-color);
        text-align: center;
        vertical-align: middle;
        position: absolute;
        width: 100px;
        height:100px;
        bottom:80px;
        left:100px;
        color:#FFF;
    }
</style>