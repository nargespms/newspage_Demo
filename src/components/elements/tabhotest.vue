<template>
    <ul>
        <li class="hot" v-for="item in myjson" v-bind:key="item._id">
           age: {{item.age}}
        </li>
    </ul>
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
