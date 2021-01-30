<template>
    <div>
        <topmemu></topmemu>
        <banner></banner>
         <section class="main-section">
            <div class="container">
                <div class="section-details">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 mt-10 move-sec">
                            <category></category>
                        </div>
                        <div class="col-md-8 col-sm-8 mt-10 m-col-12">
                            <fullcontent></fullcontent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>


<script>
import topmemu from './shared/menu'
import banner from './shared/banner'
import category from './shared/category'
import fullcontent from './shared/fullcontent'
export default {
    created(){
        console.log(this.$store.state)
    },
    components: {
        topmemu,
        banner,
        category,
        fullcontent

    }
}
</script>
