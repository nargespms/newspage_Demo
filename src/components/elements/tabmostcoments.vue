<template>
    <ul>
        <li class="mostcomments" v-for="item in myjson" v-bind:key="item._id">
           friend's name: {{item.friends[0].name}}
        </li>
    </ul>
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
