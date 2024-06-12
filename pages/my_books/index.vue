<template>
  <Header />
  <div class="body_page hello">
    <div class="container_page">
      <h1 class="title_page">Livros adicionados recentemente</h1>
      <div class="container_my_books">
        <div class="card_books" v-for="(book_avaliation, index) in book_avaliations" :key="index">
          <div class="container_image">
            <img :src="book_avaliation.book_image" :alt="book_avaliation.book_name">
            <div class="overlay">
                <div class="text">{{ book_avaliation.book_name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container_page">
      <h1 class="title_page">Livros terminados</h1>
      <div class="container_my_books">
        <div class="card_books" v-for="(book_avaliation, index) in book_avaliations" :key="index">
          <div class="container_image">
            <img :src="book_avaliation.book_image" :alt="book_avaliation.book_name">
            <div class="overlay">
                <div class="text">{{ book_avaliation.book_name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container_page">
      <h1 class="title_page">Todos os livros adicionados</h1>
      <div class="container_my_books">
        <div class="card_books" v-for="(book_avaliation, index) in book_avaliations" :key="index">
          <div class="container_image">
            <img :src="book_avaliation.book_image" :alt="book_avaliation.book_name">
            <div class="overlay">
                <div class="text">{{ book_avaliation.book_name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import starWithBackground from '@/assets/img/star_with_background_black.svg';
import starWithoutBackground from '@/assets/img/star_without_background_black.svg';
import bookCoverBlue from '@/assets/img/book_cover_blue.svg';
import bookCoverPink from '@/assets/img/book_cover_pink.svg';
import bookCoverPurple from '@/assets/img/book_cover_purple.svg';
import bookCoverRed from '@/assets/img/book_cover_red.svg';
import bookCoverBlack from '@/assets/img/book_cover.svg';

export default {
  name: 'MyBooks',
  data () {
    return {
      book_avaliations: [
        {
          book_name: 'Corte de gelo e estrelas', 
          book_image: bookCoverBlue,       
          avaliation_stars: [
          {value: 1, avaliation: true},
          {value: 2, avaliation: true},
          {value: 3, avaliation: true},
          {value: 4, avaliation: false},
          {value: 5, avaliation: false}
          ],
        },
        {
          book_name: 'Corte de névoa e fúria', 
          book_image: bookCoverPink,       
          avaliation_stars: [
          {value: 1, avaliation: true},
          {value: 2, avaliation: true},
          {value: 3, avaliation: true},
          {value: 4, avaliation: false},
          {value: 5, avaliation: false}
          ],
        },
        {
          book_name: 'Cidade da lua crescente', 
          book_image: bookCoverRed,       
          avaliation_stars: [
          {value: 1, avaliation: true},
          {value: 2, avaliation: true},
          {value: 3, avaliation: true},
          {value: 4, avaliation: false},
          {value: 5, avaliation: false}
          ],
        },
        {
          book_name: 'Corte de rosas e espinhos', 
          book_image: bookCoverPurple,       
          avaliation_stars: [
          {value: 1, avaliation: true},
          {value: 2, avaliation: true},
          {value: 3, avaliation: true},
          {value: 4, avaliation: false},
          {value: 5, avaliation: false}
          ],
        },
        {
          book_name: 'Corte de asas e ruínas', 
          book_image: bookCoverBlack,       
          avaliation_stars: [
          {value: 1, avaliation: true},
          {value: 2, avaliation: true},
          {value: 3, avaliation: true},
          {value: 4, avaliation: true},
          {value: 5, avaliation: true}
          ],
        },
      ]
    }
  },

  methods: {
    getImageSrc(avaliation) {
      return avaliation ? starWithBackground : starWithoutBackground;
    },
  }
}
</script>

<style src="~/assets/css/myBooks.css" scoped></style>
