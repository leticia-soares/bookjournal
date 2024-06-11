<template>
  <div>
    <div class="container_book_avaliation">
      <div class="avaliation_stars">
        <div v-for="(avaliation, index) in avaliation_stars" :key="index">
          <img :src="getImageSrc(avaliation.avaliation)" alt="">
        </div>
      </div>
    </div>

    <div class="container_book_image_cover">
      <img src="~/assets/img/book_cover.svg" alt="">
    </div>

    <div class="container_book_fanart">
      <div class="title_book_fanart">
        <p>
          Fanart da história
        </p>
      </div>
      <div class="image_book_fanart">
        <img src="~/assets/img/book_fanart.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import starWithBackground from '@/assets/img/star_with_background.svg';
import starWithoutBackground from '@/assets/img/star_without_background.svg';

export default {
  name: 'BookReviewWithArt',
  data () {
    return {
      avaliation_stars: [
        {value: 1, avaliation: true},
        {value: 2, avaliation: true},
        {value: 3, avaliation: true},
        {value: 4, avaliation: false},
        {value: 5, avaliation: false}
      ]
    }
  },

  methods: {
    getImageSrc(avaliation) {
      return avaliation ? starWithBackground : starWithoutBackground;
    }
  }
}
</script>

<style src="~/assets/css/bookReviewWithArt.css" scoped></style>
