<template>
    <div class="BaseLocation">
        <div 
            :style="{
                    top: `${y}px`,
                    left:`${x}px`
                }"
            class="animation7"
        ></div>
    </div>
</template>

<script>
    export default{
        setup(){
            const y = ref(100);
            const x = ref(10);
            // const revert = ref(false);
            // window.onload = function () {
            //     window.setInterval(function(){
            //         if(x.value <= 20 && revert.value){
            //             revert.value = false;
            //         }else if(x.value > 230 && !revert.value){
            //             revert.value = true;
            //         }
            //         if(!revert.value){
            //             x.value+= 10;
            //         }else{
            //             x.value -= 10;
            //         }
            //         y.value = 80/x.value; 
            //     },50);
            // }

            return {x, y};
        }
    }
</script>

<style>
    .animation7{
        position: relative;
        height:50px;
        width:50px;   
        background-color:#FFF;
        border-radius: 100%;
    }
</style>