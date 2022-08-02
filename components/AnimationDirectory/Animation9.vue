<template>
    <div class="BaseLocation">
        <div class="loader9"></div>
    </div>
</template>

<style>
    .loader9{
        width: 150px;
        height:150px;
        border-radius: 50%;
        background: #FFF;
        background: linear-gradient(to right, #FFF 10%, rgba(0,255,0,0) 42%);
        position: relative;
        top:80px;
        left:80px;
        -webkit-animation: load9 1.4s infinite linear;
        animation: load9 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }

    .loader9::before{
        width: 50%;
        height: 50%;
        background: #FFF;
        border-radius: 100% 0 0 0;
        position: absolute;
        top:0;
        left:0;
        content: '';
    }

    .loader9::after{
        background: #0bd;
        width: 75%;
        height:75%;
        border-radius: 50%;
        margin:auto;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        content: '';
    }

    @-webkit-keyframes load9{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes load9{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
