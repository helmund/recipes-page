<template>
  <div class="rounded flex card overflow-hidden relative shadow-lg hover:shadow-xl">
    <div class="card__image">
      <img :src="`https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/${item.imagePath}`"></img>
    </div>
    <div class="absolute inset-x-0 bottom-0 px-3 py-5 text-gray-100 card__details">
      <div class="font-bold">
        {{ item.name }}
      </div>
      <div class="font-medium">
        {{ item.headline }}
      </div>
    </div>
    <div class="absolute rounded-full card__link p-1 bg-teal-400 text-gray-100 flex items-center justify-center">
      []
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    item: Object
  }
}
</script>

<style>
</style>
