<template>
  <div>
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
        <!-- <router-link :to="{ path: `/recipes/${item.slug}`, props: item.name }" class=""> -->
        <a @click="showThis">
          []
        </a>
        <!-- </router-link> -->
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showRecipe" class="fixed inset-0 py-16 flex z-10 recipe-overlay">
        <div class="max-w-3xl mx-auto p-5 bg-white">
          <div>{{ item.name }}</div>
          <div>{{ item.seoDescription }} </div>
          <span @click="showThis">close</span>
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

  methods: {
    showThis () {
      if (this.showRecipe === true) {
        this.showRecipe = false
      } else {
        this.showRecipe = true
      }
    }
  },

  created () {
    // console.log(this.item)
  }
}
</script>

<style>
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
