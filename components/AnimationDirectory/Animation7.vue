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
        props:{
            modelValue:Number,
        },
        setup(props, context){
            const y = ref(0);
            const x = computed({
                get: ()=> {
                        if(props.modelValue == 0){
                            y.value = 0;
                        }else{
                            y.value = 5000/props.modelValue;
                        }
                        return props.modelValue
                    },
                set:(value) => {
                    context.emit("update:modelValue",value);
                }
            });

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