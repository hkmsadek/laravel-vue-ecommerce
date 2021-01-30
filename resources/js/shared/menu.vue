<template>
    <div>
        <nav>
            <div class="container">
                <div class="nav-inner">
                    <div class="nav-brand">
                        <div class="nav-category-menu">
                            <span><i class="fas fa-bars"></i></span>
                        </div>
                        <a href="index.html"><img src="/images/logo.png" alt="appifylab"></a>
                    </div>
                    <div class="nav-search-bar">
                        <search></search>
                    </div>

                    <div class="nav-navigation">
                        <ul>
                            <li class="nav-navigation-list">
                                <a href="#">English</a>
                            </li>
                            <li class="nav-navigation-list click-auth navi-move">
                                <a href="#">Sign-in or signup</a>
                            </li>
                            <li class="nav-navigation-list cart-list">
                                <a href="#"><span><i class="fas fa-shopping-cart"></i></span><p class="cart-show">10</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-bottom-list">

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import search from './search'
export default {
    created(){
        console.log(this.$store.state)
    },
    components: {
        search
    }
}
</script>
