<template>
  <a href="#" class="snipcart-add-item"
    :data-item-id="product.product_id"
    :data-item-name="product.name"
    :data-item-price="product.price"
    data-item-url="/"
    :data-item-image="product.image">Buy for {{ product.price }}$</a>
</template>

<script>
export default {
  name: 'BuyButton',
  props: ['product'],
};
</script>

<style>
</style>
