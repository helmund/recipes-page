<template>
  <div>
    <div class="rounded flex card overflow-hidden relative shadow-lg hover:shadow-xl">
      <div class="card__image">
        <img :src="`https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/${item.imagePath}`"></img>
      </div>
      <div class="absolute inset-x-0 bottom-0 px-3 py-5 text-gray-100 card__details">
        <div v-for="tag in item.tags" :key="tag.name" class="inline-flex mr-2 bg-green-500 rounded p-1 text-white">
          {{tag.name}}
        </div>
        <div class="font-bold">
          {{ item.name }}
        </div>
        <div class="font-medium">
          {{ item.headline }}
        </div>
      </div>
      <div
        class="absolute rounded-full card__link p-1 bg-teal-400 text-gray-100 flex items-center justify-center cursor-pointer"
        @click="showThis"
      >
        []
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showRecipe" class="fixed inset-0 py-16 flex z-10 recipe-overlay">
        <div class="max-w-3xl mx-auto p-5 bg-white rounded shadow-xl relative overflow-y-auto">
          <div class="absolute rounded-full top-0 right-0 mt-5 mr-5 p-1 bg-teal-400 text-gray-100 flex items-center justify-center w-12 h-12 cursor-pointer" @click="showThis">
            x
          </div>
          <div class="-mx-5 -mt-5 mb-5">
            <img :src="`https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_768,q_auto/v1/hellofresh_s3/${item.imagePath}`"></img>
          </div>
          <div class="static flex justify-between">
            <div class="text-4xl font-medium">
              {{ item.name }}
            </div>
          </div>
          <div
            class="mb-4"
            v-html="item.descriptionHTML"
          />
          <div class="flex flex-wrap justify-center bg-gray-100 py-2 mb-5 -mx-5 shadow-inner--custom">
            <div
              v-for="(ingredient, index) in item.ingredients"
              :key="ingredient.id"
              class="w-5/12"
            >
              <div
                v-if="ingredient.shipped == true"
                class="py-1"
              >
                <div class="text-sm text-gray-700">
                  <span>{{ item.yields[0].ingredients[`${index}`].amount }}</span>
                  <span>{{ item.yields[0].ingredients[`${index}`].unit }}</span>
                </div>
                {{ ingredient.name }}
              </div>
            </div>
          </div>

          <div
            v-for="(step, index) in item.steps"
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
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object,
    showRecipe: Boolean
  },

  created () {
  },

  methods: {
    showThis () {
      const body = document.getElementsByTagName('body')[0]
      if (this.showRecipe === true) {
        this.showRecipe = false
        body.classList.remove('overflow-hidden')
      } else {
        this.showRecipe = true
        body.classList.toggle('overflow-hidden')
      }
    }
  }
}
</script>

<style>
.shadow-inner--custom {
  box-shadow: inset 0 2px 8px 0 rgba(0, 0, 0, 0.06);
}

.recipe-overlay {
  backdrop-filter: blur(4px);
}
.slide-fade-enter-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(200%);
  opacity: 0;
}
</style>
