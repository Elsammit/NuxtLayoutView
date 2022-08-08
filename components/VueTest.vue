<template>
    <p>{{ message }}</p>
</template>

<script>
import { stringLiteral } from "@babel/types";
import {ref} from "vue";
import {marked} from "marked"
export default{
    props:{
        title:String,
    },
    setup(props){
        const message = marked(props.title);
        return {
            message
        };
    }
};
</script>