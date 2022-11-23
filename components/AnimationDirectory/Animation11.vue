<template>
    <div class="BaseLocation">
        <div @click="onMouseOver" class="MouseArea11">Touch Here</div>
        <transition name="fade" appear>
            <p v-if="show1">Hello</p>
        </transition>
        <div @click="onMouseOver2" class="MouseArea11">Touch Here</div>
        <transition name="fade2" appear>
            <p v-if="show2">Hello2</p>
        </transition>
        <div @click="onMouseOver3" class="MouseArea11">Touch Here</div>
        <transition name="bounce3">
            <p v-if="show3">
                「結局何を一番伝えたいのか」をはっきりさせて、先に述べます。
                その結論の説明を後に述べます。SNSへの投稿のように短い文章を書く時にも意識すると、
                文章が見違えますよ。
            </p>
        </transition>
    </div>
</template>

<script>
    export default{
        setup(){
            const show1 = ref(false);
            const show2 = ref(false);
            const show3 = ref(false);

            const onMouseOver = () =>{
                show1.value = !show1.value;
            }

            const onMouseOver2 = () =>{
                show2.value = !show2.value;
            }

            const onMouseOver3 = () =>{
                show3.value = !show3.value;
            }

            return {show1, onMouseOver, onMouseOver2, show2, show3, onMouseOver3}
        }
    }
</script>

<style>
    .fade-leave-active, .fade-enter-active{
        transition: opacity 1.5s;
    }

    .fade-enter-from, .fade-leave-to{
        opacity: 0;
    }

    .fade2-enter-active{
        transition: all .3s;
    }

    .fade2-leave-active{
        transition: all .8s;
    }

    .fade2-enter-from, .fade2-leave-to{
        transform:translateX(10px);
        opacity: 0;
    }

    .bounce3-enter-active{
        animation: bounce-in .5s;
    }
    .bounce3-leave-active{
        animation:bounce-in .5s reverse;
    }

    @keyframes bounce-in{
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }

    .MouseArea11{
        width: 100px;
        height:20px;
        position: relative;
        left: 100px;
        top:20px;
        background-color: aliceblue;
    }

    .MouseArea11:hover{
        background-color: burlywood;
        cursor: pointer;
    }
</style>