<template>
  <div class="max-w-5xl mx-auto py-5">
    <div class="flex justify-center">
      <button @click="picker" class="mr-2 bg-green-500 rounded p-1 text-white">
        Zufallsrezept
      </button>
    </div>
    <div class="flex flex-wrap">
      <div v-if="chosenRecipe" class="w-full md:w-6/12 my-4 px-2">
        <card :item="chosenRecipe" />
      </div>
      <div v-else v-for="recipe in recipes" :key="recipe.name" class="w-full md:w-6/12 my-4 px-2">
        <card :item="recipe" />
      </div>

      <!-- <div class="" v-for="recipe in recipes" :key="recipe.id">
          {{ recipe }}
      </div> -->
    </div>
  </div>
</template>

<script>

// import axios from 'axios'
import card from '~/components/Card.vue'

export default {
  components: {
    card
  },
  props: {
    chosenRecipe: Object
  },

  computed: {
    recipes () {
      return this.$store.state.recipes
    }
  },

  created () {
    this.$store.dispatch('getRecipes')
  },

  // async asyncData () {
  //   const { data } = await axios.get('/rezepte-500-750.json')
  //   return { items: data }
  // },
  methods: {
    picker () {
      // console.log(this.items.items.length)
      const randomRecipe = Math.floor(Math.random() * this.recipes.length)
      this.chosenRecipe = this.recipes[randomRecipe]
      console.log(this.chosenRecipe)
    }
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
