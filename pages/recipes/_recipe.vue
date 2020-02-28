<template>
<div v-if="isLoaded">
    <div class="">
      <div class="max-w-3xl mx-auto p-5 bg-white relative ">
        <router-link 
          to="/"
          class="absolute rounded-full top-0 right-0 mt-5 mr-5 p-1 bg-teal-400 text-gray-100 flex items-center justify-center w-12 h-12 cursor-pointer"
          >x</router-link>
        <div class="rounded-full bottom-10 right-10 mt-5 mr-5 p-1 bg-teal-400 text-gray-100 flex items-center justify-center w-12 h-12 cursor-pointer fixed" @click="getIngrediens">
          O
        </div>
        <div class="-mx-5 -mt-5 mb-5">
          <img :src="`https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_768,q_auto/v1/hellofresh_s3/${recipe.imagePath}`"></img>
        </div>
        <div class="static flex justify-between">
          <div class="text-4xl font-medium">
            {{ recipe.name }}
          </div>
        </div>
        <div
          class="mb-4"
          v-html="recipe.descriptionHTML"
        />
        <div class="flex flex-wrap justify-center bg-gray-100 py-2 mb-5 -mx-5 shadow-inner--custom">
          <div
            v-for="(ingredient, index) in recipe.ingredients"
            :key="ingredient.id"
            class="w-5/12"
          >
            <div v-if="ingredient.shipped == true" class="py-1">
              <div class="text-sm text-gray-700">
                <span>{{ recipe.yields[0].ingredients[`${index}`].amount }}</span>
                <span>{{ recipe.yields[0].ingredients[`${index}`].unit }}</span>
              </div>
              {{ ingredient.name }}
            </div>
          </div>
        </div>

        <div
          v-for="(step, index) in recipe.steps"
          :key="step.index"
          class="flex mb-4"
        >
          <div class="font-medium text-5xl leading-none mr-2">
            {{ index + 1 }}.
          </div>
          <div v-html="step.instructionsHTML" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipes () {
      return this.$store.state.recipes
    },
    recipe () {
      return this.recipes.find(el => el.slug === this.slug);
    },
    isLoaded () {
      return !this.$store.state.loading
    }
  },

  data () {
    return {
      slug: this.$route.params.recipe,
      // i: ''
    }
  },

  created () {
    this.$store.dispatch('getRecipes')
    console.log(this.$route.params)
  },

  methods: {
    getIngrediens () {
      var i;
      for (i = 0; i < this.recipe.ingredients.length; i++) {
        console.log(this.recipe.ingredients[i].name)
      }
    }
  },
}
</script>