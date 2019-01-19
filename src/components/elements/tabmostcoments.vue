<template lang="pug">
    ul
      li.mostcomments(v-for="item in myjson" v-bind:key="item._id")   friend's name: {{item.friends[0].name}}
</template>

<script>
import generated from '../../data/generated.json'

export default {
    name: 'mostcoments',
    data(){
        return{
            myjson: generated
        }
    }
}
</script>
