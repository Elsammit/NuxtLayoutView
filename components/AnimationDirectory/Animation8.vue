<template>
    <div class="BaseLocation">
        <div class="loader8"></div>
    </div>
</template>

<style>
    .loader8, .loader8::after{
        position: relative;
        top:80px;
        left: 80px;
        border-radius: 50%;
        width: 100px;
        height:100px;
    }

    .loader8{
        margin: 60px, auto;
        position: relative;
        border-top: 1.1em solid rgba(255,0,0,0.2);
        border-right:1.1em solid rgba(255,0,0,0.2);
        border-bottom: 1.1em solid rgba(255,0,0,0.2);
        border-left: 1.1em solid #F00;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform:translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
    }

    @-webkit-keyframes load8{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes load8{
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