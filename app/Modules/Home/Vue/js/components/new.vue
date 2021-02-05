<template>
    <div>
        <h1>this is the test and it works out of the box from the module</h1>
        <h1>{{getAccount}}</h1>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    created(){
        console.log('store state ')
        console.log(this.$store)
    },
    computed: {
        ...mapGetters({
            'getAccount' : 'accounts/getAccount'
        })
    }
}
</script>
