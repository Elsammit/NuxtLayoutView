<template>
    <div>
        <h1>アニメーションリスト</h1>
        <div class="field">
            <table>
                <tbody>
                    <tr>
                        <td class="Column">
                            <Animation1 />
                        </td>
                        <td class="Column">
                            <Animation2 />
                        </td>
                        <td class="Column">
                            <Animation3 />
                        </td>
                    </tr>
                    <tr>
                        <td class="Column">
                            <Animation4 />
                        </td>
                        <td class="Column">
                            <Animation5 />
                        </td>
                        <td>
                            <Animation6 v-model="x" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Animation7 v-model="x" />
                        </td>
                        <td>
                            <Animation8 />
                        </td>
                        <td>
                            <Animation9 />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Animation10 />
                        </td>
                        <td>
                            <Animation11 />
                        </td>
                        <td>
                            <Animation12 />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Animation13 />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import Animation6 from '~~/components/AnimationDirectory/Animation6.vue'
    export default{
        setup(){
            const x = ref(10);
            const revert = ref(false);
            onMounted(()=>{
                window.setInterval(function(){
                    if(x.value <= 20 && revert.value){
                        revert.value = false;
                    }else if(x.value > 230 && !revert.value){
                        revert.value = true;
                    }
                    if(!revert.value){
                        x.value+= 10;
                    }else{
                        x.value -= 10;
                    }
                },50);
            });
            return {x}
        }
    }
</script>

<style>
.BaseLocation{
    width:300px;
    height: 300px;
    transition:all 1s;
    background-color: #0bd;
}
</style>