<template>
  <not-found v-if="notFound" />
  <div class="product-details" v-else>
    <figure>
      <img :src="product.fields.image" :alt="product.fields.name" />
    </figure>
    <section>
      <h2>{{product.fields.name}}</h2>
      <p>{{product.fields.description}}</p>
      <p><buy-button :product="product.fields" /></p>
    </section>
  </div>
</template>

<script>
import butter from '@/buttercms';
import BuyButton from './BuyButton';
import NotFound from './NotFound';

export default {
  name: 'ProductPage',
  components: {
    NotFound,
    BuyButton,
  },
  data() {
    return {
      product: {
        slug: '',
        fields: {},
      },
      notFound: false,
    };
  },
  props: ['slug'],
  methods: {
    getProduct() {
      butter.page.retrieve('product', this.slug)
        .then((res) => {
          this.product = res.data.data;
        }).catch(() => {
          this.notFound = true;
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style>
@media (min-width: 300px) {
  .product-details {
    display: flex;
  }
  .product-details figure {
    width: 50%;
  }
}
</style>
