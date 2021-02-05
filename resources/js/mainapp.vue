<template>
    <div>
        <topmemu></topmemu>
        <router-view></router-view>
    </div>
</template>


<script>
import topmemu from './shared/menu'

export default {
    created(){
        console.log(this.$store.state)
    },
    components: {
        topmemu,
    }
}
</script>
