<template>
  <div v-if="isLoaded">
    <h1 class="text-center my-5">
      {{ tag.slug }}
    </h1>
    <!-- TODO: filter before -->
    <div class="max-w-5xl mx-auto py-5">
      <div class="flex flex-wrap">
        <div v-for="recipe in recipes" :key="recipe.id" class="w-full md:w-6/12 my-4 px-2">
          <div v-if="recipe.tags.length >= 1">
            <div v-if="recipe.tags[0].slug == tag.slug">
              <card :item="recipe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="h-screen w-screen flex items-center justify-center">
    Lädt
  </div>
</template>

<script>
import card from '~/components/Card.vue'
export default {
  components: {
    card
  },
  computed: {
    recipes () {
      return this.$store.state.recipes
    },
    tags () {
      return this.$store.state.tags
    },
    tag () {
      return this.tags.find(el => el.slug === this.slug)
    },
    recipeWithTag () {
      // return this.$store.state.tags.find(el => el.tags[el.index].slug === this.slug)
    },
    isLoaded () {
      return !this.$store.state.loading
    }
  },

  data () {
    return {
      slug: this.$route.params.tag
      // i: ''
    }
  },

  created () {
    this.$store.dispatch('getRecipes'),
    this.$store.dispatch('getTags')
  },

  methods: {
    // getIngrediens () {
    //   var i;
    //   for (i = 0; i < this.recipe.ingredients.length; i++) {
    //     console.log(this.recipe.ingredients[i].name)
    //   }
    // }
  },
}
</script>

<style lang="scss">
  .w-full:empty {
    display: none
  }
</style>