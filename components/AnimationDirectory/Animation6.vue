<template>
    <div class="BaseLocation">
        <div 
            
            :style="{
                    top: `${y}px`,
                    left:`${x}px`
                }"
            class="animation6"
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
                        y.value = props.modelValue;
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
    .animation6{
        position: relative;
        height:50px;
        width:50px;   
        background-color:#FFF;
        border-radius: 100%;
    }
</style>