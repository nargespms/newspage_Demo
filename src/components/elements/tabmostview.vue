<template>
     <ul>
        <li class="mostview" v-for="item in myjson" v-bind:key="item._id">
            email : {{item.email}}
        </li>
    </ul>
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

