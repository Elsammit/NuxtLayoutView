<template>
    <div class="BaseLocation">
        <div class="MoveCircle"></div>
    </div>
</template>

<style>
.MoveCircle{
    position: relative;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    left:130px;
    top:130px;
    border-radius: 50%;    
    box-shadow: 
        0 -120px 0 #eee,
        84px -84px 0 #ddd,
        120px 0 0 #ccc,
        84px 84px 0 #bbb,
        0 120px 0 #aaa,
        -84px 84px 0 #999,
        -120px 0 0 #666,
        -84px -84px 0 #000;

    animation: circle-move steps(8) 1.0s infinite;
}

@keyframes circle-move{
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    } 
}
</style>