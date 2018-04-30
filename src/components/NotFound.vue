<template>
  <div>
    <h2>Oups! There's no happy cow here..</h2>
    <p>
      <img class="cow-img" src="/static/sad_cow.svg" alt="404 Sad Cow" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style>
.cow-img {
  max-width: 60%;
}
</style>
