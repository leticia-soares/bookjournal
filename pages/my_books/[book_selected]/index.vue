<template>
  <div>
    <Header />
    <div class="body_page hello">
      <div class="container_page">
        <div class="container_books_info">
          <div class="container_book_review">
            <BookReviewWithArt class="full-height" />
          </div>
          <div class="container_book_info">
            <BookInfoCard class="full-height" />
          </div>
        </div>
        <div>
          <BookExcerpt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundCheckeredBlue from '@/assets/img/background_checkered_blue.svg';
import backgroundBlue from '@/assets/img/background_blue.svg';
export default {
  name: 'BookSelected',
  data () {
    return {
      change_color: false,
    }
  },

  mounted() {
    this.change_site_color()
  },

  methods: {
    change_site_color() {
      if (this.change_color) {
        this.setCssVariable('--background-color', '#90B3E0');
        this.setCssVariable('--background-color-card', '#BDD7F4');
        this.setCssVariable('--font-color-title', '#244E83');
        this.setCssVariable('--background-image-checkered', `url(${backgroundCheckeredBlue})`);
        this.setCssVariable('--background-image-book', `url(${backgroundBlue})`);
      } else {
        console.log('ui')
      }
    },
    setCssVariable(variable, value) {
      document.documentElement.style.setProperty(variable, value);
    }
  }
}
</script>

<style src="~/assets/css/bookSelected.css" scoped></style>
