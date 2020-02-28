<template>
  <div>
    <div class="rounded flex card overflow-hidden relative shadow-lg hover:shadow-xl">
      <div class="card__image">
        <img :src="`https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/${item.imagePath}`"></img>
      </div>
      <div class="absolute inset-x-0 bottom-0 px-3 py-5 text-gray-100 card__details">
        <div v-for="(tag, i) in item.tags" :key="`${i}-${tag.name}`" class="inline-flex mr-2 bg-green-500 rounded p-1 text-white">
          {{tag.name}}
        </div>
        <div class="font-bold">
          {{ item.name }}
        </div>
        <div class="font-medium">
          {{ item.headline }}
        </div>
      </div>
      <a
        :href="`recipes/${item.slug}`"
        class="absolute rounded-full card__link p-1 bg-teal-400 text-gray-100 flex items-center justify-center cursor-pointer"
      >
        []
      </a>
    </div>
  </div>
</template>

<script>
//import overlay from '~/components/Overlay.vue'

export default {
  name: 'Card',
  components: {
  //  overlay
  },

  data () {
    return {
      showRecipe: false
    }
  },

  props: {
    item: Object
  },

  created () {
  },

  methods: {
    showThis () {
      // const body = document.getElementsByTagName('body')[0]
      if (this.showRecipe === true) {
        this.showRecipe = false
        // body.classList.remove('overflow-hidden')
      } else {
        this.showRecipe = true
        // body.classList.toggle('overflow-hidden')
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
