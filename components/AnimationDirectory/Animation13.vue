<template>
<div class="BaseLocation">
    <button @click="test">Click Here</button>
    <div class="circle">
        <div class="item"
        v-bind:style="{animation:obj}">
        </div>
    </div>
</div>
</template>

<script>
    export default{
        setup(){
            const obj = ref("");
            const flg = ref(false);
            const test = () =>{
                if(!flg.value){
                    obj.value = "circle-move-anim 4s linear infinite";
                }else{
                    obj.value = "";
                }
                flg.value = !flg.value;
            }

            return {test, obj};
        }
    }
</script>

<style>
.circle{
    position: relative;
    top:50px;
    left: 50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: solid 1px #808080;
}

.item{
    position: relative;
    top: 70px;
    left: 70px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #4169e1;
    transform: translateX(100px);
    /* animation: circle-move-anim 4s linear infinite; */

    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes circle-move-anim{
    0%{
        transform: rotate(0deg) translateX(-100px) rotate(0deg);
    }

    100%{
        transform: rotate(360deg) translateX(-100px) rotate(-360deg);
    }
}

</style>