<template>
  <not-found v-if="notFound" />
  <div v-else>
    Product Page
  </div>
</template>

<script>
import butter from '@/buttercms';
import NotFound from './NotFound';

export default {
  name: 'ProductPage',
  components: {
    NotFound,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      product: {
        slug: '',
        fields: {},
      },
      notFound: false,
    };
  },
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
</style>
