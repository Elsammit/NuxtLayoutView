<template>
    <div class="BaseLocation">
        <div class="ProgressBar">
            <p class="bar"></p>
        </div>
    </div>
</template>

<style>
    .ProgressBar{
        width: 200px;
        height:50px;
        top:100px;
        left:50px;
        background-color: #ececec;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
    }

    .ProgressBar .bar{
        position: relative;
        top:-20px;
        height:80px;
        background-color: #FFCA28;
        animation: progress 4s normal infinite;
        animation-fill-mode:forwards;
    }

    @keyframes progress{
        0%{
            width: 0;
        }
        100%{
            width: 100%;
        }
    }

</style>