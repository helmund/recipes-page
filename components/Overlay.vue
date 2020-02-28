<template>
  <div>
    <div class="fixed inset-0 py-16 flex z-10 recipe-overlay">
      <div class="max-w-3xl mx-auto p-5 bg-white rounded shadow-xl relative overflow-y-auto">
        <div
          class="absolute rounded-full top-0 right-0 mt-5 mr-5 p-1 bg-teal-400 text-gray-100 flex items-center justify-center w-12 h-12 cursor-pointer"
          @click="$emit('close')">
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
            <div v-if="ingredient.shipped == true" class="py-1">
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
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    item: {
      type: [Array, Object]
    }
    // showRecipe: false
  },

  created () {
  },

  methods: {
    // closeThis () {
    //   // console.log('adsd')
    //   this.$emit('showRecipe', 'false')
    // }
  }
}
</script>

<style>
</style>
