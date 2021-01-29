<template>
    <div>
        <h1>This is example page from inside the example module... </h1>
    </div>
</template>


<script>
export default {
    created(){
        console.log("accessing store from example module", this.$store.state)
    }
}
</script>
