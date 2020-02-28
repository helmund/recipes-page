<template>
  <div>
    <div class="rounded flex card overflow-hidden relative shadow-lg hover:shadow-xl">
        <div class="card__image card__image--loading">
          <img :src="`https://source.unsplash.com/500x330/?food,${this.tag}`" />
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoadingCard',
  props: {
    tag: ''
  },
}
</script>

<style>

.card__image--loading img {
  filter: blur(10px)
}

</style>
