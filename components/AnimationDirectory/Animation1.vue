<template>
    <div class="BaseLocation">
        <div class="spinner1"></div>
    </div>
</template>

<style>
.spinner1{
    position: relative;
    width: 100px;
    height: 100px;
    top:100px;
    left:100px;
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