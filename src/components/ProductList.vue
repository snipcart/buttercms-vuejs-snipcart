<template>
  <section class="product-list">
    <h2>Our products</h2>
    <ul class="products">
     <li v-for="(product,index) in products"
        :key="product.slug + '_' + index"
        @click="navigate($event, product)"
        class="product">
        <figure>
          <img :src="product.fields.image" />
        </figure>
        <p>
          {{ product.fields.name }}
        </p>
        <p>
          <buy-button :product="product.fields" />
        </P>
     </li>
    </ul>
  </section>
</template>

<script>
import butter from '@/buttercms';
import BuyButton from './BuyButton';

export default {
  name: 'ProductList',
  components: {
    BuyButton,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    navigate($event, product) {
      if ($event.defaultPrevented) {
        return;
      }
      this.$router.push({
        name: 'Product',
        params: { slug: product.slug },
      });
    },
    getProducts() {
      butter.page.list('product')
        .then((res) => {
          this.products = res.data.data;
        });
    },
  },
  created() {
    // Fire on page creation
    this.getProducts();
  },
};
</script>

<style>
.product-list {
  margin-top: -2em;
}

.products {
  padding: 0;
  display: flex;
  text-align: center;
}

.product {
  list-style-type: none;
  width: 30%;
}

.product figure + p {
  margin-top: -1em;
}

.product:hover {
  background-color: rgba(97, 189, 255, 0.34);
  cursor: pointer;
  border-radius: 1em;
}
</style>
