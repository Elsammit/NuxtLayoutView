<template>
<div class="BaseLocation">
    <input v-model="view" type="radio" value="v-a" id="a"/>
    <label for="a">A</label>
    <input v-model="view" type="radio" value="v-b" id="b" />
    <label for="b">B</label>
    <transition name="component-fade" mode="out-in">
        <div v-if="view == 'v-b'">Component B</div>
        <div v-else-if="view == 'v-a'">Component A</div>
    </transition>

    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p" v-model="items">
        <span v-for="item in items" :key="item" class="list-item">
            {{ item }} 
        </span>
    </transition-group>
</div>
</template>

<script>
    export default{
        setup(){
            const view = ref("v-a");
            
            const items = ref([1,2,3,4,5,6,7,8,9]);
            const nextNum = ref(10);

            const randomIndex = () =>{
                return Math.floor(Math.random() * items.value.length);
            }

            const add = () =>{
                console.log(items.value);
                items.value.splice(randomIndex(), 0, nextNum.value++)
            }

            const remove = () =>{
                console.log("remove");
                items.value.splice(randomIndex(), 1);
            }

            return {view, items, add, remove}
        }
    }
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  
  transform: translateY(30px);
}
</style>