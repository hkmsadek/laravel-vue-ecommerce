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
                        <form action="#">
                            <div class="nav-search-locat">
                                <div class="nav-search-locat-inner" id="location-delivery">
                                    <span><i class="fas fa-map-marker-alt"></i></span>
                                </div>
                            </div>
                            <div class="nav-search-input">
                                <div class="nav-search-input-inner">
                                    <input type="text" placeholder="Search for products">
                                </div>
                            </div>
                            <div class="nav-search-icon">
                                <div class="nav-search-icon-inner">
                                    <button onclick="window.location.href='search-page.html'"><span><i class="fas fa-search"></i></span></button>
                                </div>
                            </div>
                        </form>
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
         <router-view></router-view>
    </div>
</template>


<script>
export default {
    created(){
        console.log(this.$store.state)
    }
}
</script>
