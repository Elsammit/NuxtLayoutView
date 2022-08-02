<template>
    <div class="BaseLocation">
        <div class="Zoom10">拡大</div>
    </div>
</template>

<script>

</script>

<style>
    .Zoom10{
        width: 100px;
        height: 100px;
        background-color:#FFF;
        position: relative;
        left:100px;
        top:100px;
        text-align: center;
        line-height: 100px;

        -webkit-transition: -webkit-transform 0.6s linear;
        -moz-transition: -moz-transform 0.6s linear;
        -o-transition: -o-transform 0.6s linear;
        -ms-transition: -ms-transform 0.6s linear;
        transition: transform 0.6s linear;
    }    

    .Zoom10:hover{
        -webkit-transform: scale(1.5);
        -moz-transform: scale(1.5);
        -o-transform: scale(1.5);
        -ms-transform:scale(1.5);
        transform: scale(1.5);
    }

</style>