<template lang="pug">
    ul
      li.hot(v-for="item in myjson" v-bind:key="item._id") age: {{item.age}}

</template>

<script>
import generated from '../../data/generated.json'

export default {
    name: 'hotest',
    data: function() {
        return {
            myjson : generated,
        }
    }
}
</script>
