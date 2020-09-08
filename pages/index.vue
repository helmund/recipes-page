<template>
  <div class="max-w-5xl mx-auto py-5">
    <div class="flex justify-center flex-wrap">
        <a v-for="tag in tags" :key="tag.id"
          :href="`tags/${tag.slug}`"
          class="mx-1 my-1 bg-green-500 rounded p-1 text-white">
          {{ tag.name }}
        </a>
    </div>
    <div class="flex justify-center">
      <button @click="picker" class="mr-2 bg-green-500 rounded p-1 text-white">
        Zufallsrezept
      </button>
    </div>
    <div class="flex flex-wrap">
      <div v-if="chosenRecipe" class="w-full md:w-6/12 my-4 px-2">
        <card :item="chosenRecipe" />
      </div>
      <div v-else v-for="recipe in recipes" :key="recipe.id" class="w-full md:w-6/12 my-4 px-2">
        <card :item="recipe" />
      </div>
    </div>
  </div>
  <!-- <div v-else class="flex flex-wrap">
    <div class="w-full md:w-6/12 my-4 px-2">
      <loading-card tag="pizza"></loading-card>
    </div>
    <div class="w-full md:w-6/12 my-4 px-2">
      <loading-card tag="noodles"></loading-card>
    </div>
  </div> -->
</template>

<script>

// import axios from 'axios'
import card from '~/components/Card.vue'
import loadingCard from '~/components/LoadingCard.vue'

export default {
  components: {
    card,
    loadingCard
  },
  props: {
    chosenRecipe: Object
  },

  computed: {
    recipes () {
      return this.$store.state.recipes
    },
    tags () {
      return this.$store.state.tags
    },
    isLoaded () {
      return !this.$store.state.loading
    }
  },

  created () {
    this.$store.dispatch('getRecipes'),
    this.$store.dispatch('getTags')
  },

  updated () {
    console.log('updated')
  },
  methods: {
    picker () {
      const randomRecipe = Math.floor(Math.random() * this.recipes.length)
      this.chosenRecipe = this.recipes[randomRecipe]
      console.log(this.chosenRecipe)
    }
  }
}

</script>
