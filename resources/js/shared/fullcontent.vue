<template>
  <div>
    <div class="category-full-content">
      <div class="category-slider box-shadow">
        <div class="category-owl-slider owl-carousel owl-theme">
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/1.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Wrist Watch</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/2.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Folding Mobile</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/3.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Mobile Phone</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/4.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Laptop</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/5.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Smart Watch</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/6.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Shirt</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/7.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Shoe</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/8.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Panjabi</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/9.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Sunglass</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/10.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Bike</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/3.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Mobile Phone</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/1.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Wrist Watch</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/9.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Sunglass</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/4.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Laptop</p>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="category-sub-page.html">
              <figure>
                <img src="/images/2.png" alt="appifylab" />
              </figure>
              <div class="category-slider-caption">
                <p>Folding Mobile</p>
              </div>
            </a>
          </div>
        </div>
      </div>

        <productsection title="Popular"></productsection>
        <productsection title="Men's fasion"></productsection>
        <productsection title="Women new arrivals"></productsection>
        <productsection title="Bla bla"></productsection>
        <productsection title="and bla bla"></productsection>


    </div>
  </div>
</template>

<script>
import productsection from './productsection'

export default {
    created(){
        console.log(this.$store.state)
    },
    components: {
        productsection,
    }
}
</script>

