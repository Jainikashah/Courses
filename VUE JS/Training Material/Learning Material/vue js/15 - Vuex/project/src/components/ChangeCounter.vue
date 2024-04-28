<template>
    <div>
        <button @click="addOne">Add 10 * 2</button>
    </div>
</template>

<script>
export default {
    methods: {
        addOne(){
            // this.$store.commit('increase', {value:10})
        this.$store.dispatch({
            type: 'numbers/increase',
            value:10
        })
        }
        
    }
}
</script>