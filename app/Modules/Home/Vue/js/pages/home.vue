<template>
    <div>
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
    </div>
</template>


<script>
import topmemu from '../../../../../../resources/js/shared/menu'
import banner from '../../../../../../resources/js/shared/banner'
import category from '../../../../../../resources/js/shared/category'
import fullcontent from '../../../../../../resources/js/shared/fullcontent'

export default {
    created(){
        console.log("accessing store from home module", this.$store.state)
    },
    components: {
        topmemu,
        banner,
        category,
        fullcontent

    }
}
</script>
