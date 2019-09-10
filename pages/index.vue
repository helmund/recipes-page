<template>
  <div class="max-w-5xl mx-auto py-5">
    <div class="flex flex-wrap">
      <div v-for="item in items.items" :key="item.name" class="w-6/12 my-4 px-2">
        <div class="rounded flex card overflow-hidden relative shadow-lg hover:shadow-xl">
          <div class="card__image">
            <img :src="`https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/${item.imagePath}`" />
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
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  components: {
  },
  props: {

  },

  async asyncData () {
    const { data } = await axios.get('/recipes.json')
    return { items: data }
  }
}

</script>
<style lang="scss">
  .card__details {
    background: linear-gradient(to bottom,  #0000 0%,#000000a6 68%,#000000a6 100%,#000000a6 101%);
  }

  .card__image {
    transition: all 1s linear;
    opacity: .9;
  }

  .card:hover .card__image {
    opacity: 1;
    transform: scale(1.2)
  }

  .card__link {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    transform: translateY(150%) rotate(0deg);
    transition: transform .4s .1s;
  }

  .card:hover .card__link {
    transform: translateY(0) rotate(0deg);
  }
</style>
