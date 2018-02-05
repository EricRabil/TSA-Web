<template>
    <div :class="this.itemData.classes.image">
        <img :src="this.imageURL" :alt="this.itemData.imageAlt" height="558">
        <div v-if="!!this.itemData.text" class="carousel-caption">
            <h3>{{this.itemData.text.title}}</h3>
            <p v-if="!!this.itemData.text.caption">{{this.itemData.text.caption}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
   props: ["itemData"], 
   computed: {
       imageURL() {
           const url: any = this.itemData.url;
           if (url.startsWith("http")) {
               return url;
           }
           return `./assets/${url}`;
       }
   }
});
</script>

<style lang="scss">

.carousel-item > img {
    top: 0;
    left: 0;
    min-width: 100%;
    object-fit: cover;
}

.carousel-caption {
    bottom: 3rem;
    z-index: 10;
}

@media (min-width: 40em) {
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
}
</style>