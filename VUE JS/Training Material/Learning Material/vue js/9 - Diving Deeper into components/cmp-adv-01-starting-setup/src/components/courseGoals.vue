<template>
    <ul>
        <li v-for='goal in goals' :key="goal">
            <slot :item="goal" :next="'....'"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            goals : ['finsihed goals', 'learning vue']
        }
    }
}
</script>