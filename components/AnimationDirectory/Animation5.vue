<template>
    <div class="BaseLocation">
        <div 
            @mousemove="onMouseMove" 
            :style="{
                    backgroundColor: `hsl(${x}, 80%, 50%)`,
                    color:`${y}`
                }"
            class="movearea"
        >
            <p>Move your mouse <br/>across this div ...</p>
        </div>
    </div>
</template>

<script>
    export default{
        setup(){
            const x = ref(0);
            const y = ref("#FFFF");
            const onMouseMove = (e) =>{
                x.value = e.clientX
            };
            return {x, onMouseMove,y}
        }
    }
</script>

<style>
    .movearea {
        position: relative;
        top:50px;
        left:50px;
        transition: 0.3s background-color ease;
        height:200px;
        width:200px;
    }
</style>