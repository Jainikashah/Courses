<template functional>
    <div>
        <h2>
            <slot name="heading"></slot>
        </h2>
        <p>
            <slot name="description"></slot>
        </p>
    </div>
</template>


<script>
export default {
    name : 'BaseHeader'
}
</script>

<style scoped>
    div{
        width : 100vw;
        text-align: center;
    }
    h2{
        padding: .4rem;
        margin: 0;
        font-size: 2rem;
    }
    p{
        margin: 0;
        padding: 0;
        font-size: .9rem;
    }
  
</style>

