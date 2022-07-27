<template>
    <div class="loading1">
        <div class="spinner1"></div>
    </div>
</template>

<style>
.loading1{
    width:300px;
    height: 300px;
    transition:all 1s;
    background-color: #0bd;
}

.spinner1{
    width: 100px;
    height: 100px;
    margin:200px auto;
    background-color: #fff;
    border-radius: 100%;
    animation: sk-scaleout 1.0s infinite ease-in-out;
}

@keyframes sk-scaleout{
    0%{
        transform:scale(0);
    }
    100%{
        transform: scale(1.0);
        opacity:0;
    }
}

</style>