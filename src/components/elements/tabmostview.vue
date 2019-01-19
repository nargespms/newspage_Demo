<template lang="pug">
     ul
       li.mostview(v-for="item in myjson" v-bind:key="item._id")  email : {{item.email}}
</template>

<script>
import generated from '../../data/generated.json'

export default {
    name: 'mostview',
    data(){
        return{
            myjson: generated
        }
    }
}
</script>

