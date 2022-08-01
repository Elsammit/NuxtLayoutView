<template>
    <div class="BaseLocation">
        <div class="loader9"></div>
    </div>
</template>

<style>
    .loader9{
        position: relative;
        top:80px;
        left: 80px;
        border-radius: 50%;
        width: 100px;
        height:100px;
    }

    .loader9{
        margin: 50px, auto;
        position: relative;
        /* border-image: linear-gradient(rgba(255,0,0,1.0), rgba(255,0,0,0.0)); */
        border-top: 1.1em solid rgba(255,0,0,0.2);
        border-right:1.1em solid rgba(255,0,0,0.2);
        border-bottom: 1.1em solid rgba(255,0,0,0.2);
        /* border-left: 1.1em solid; */
        /* border-left-color: linear-gradient(rgba(255,0,0,1.0), rgba(255,0,0,0.0)); */
        border-left: 1.1em solid red;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform:translateZ(0);
        -webkit-animation: load9 2.1s infinite linear;
        animation: load9 2.1s infinite linear;
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
