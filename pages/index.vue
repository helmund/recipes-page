<template>
  <div class="max-w-5xl mx-auto py-5">
    <div class="flex flex-wrap">
      <div v-for="item in items.items" :key="item.name" class="w-6/12 my-4 px-2">
        <card :item="item"></card>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import card from '~/components/Card.vue'

export default {
  components: {
    card
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
