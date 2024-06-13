<template>
  <Header />
  <div class="body_page hello">
    <div class="container_page">
      <h1 class="title_page">Livros adicionados recentemente -></h1>
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
      <h1 class="title_page">Livros terminados -></h1>
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
      <h1 class="title_page">Todos os livros adicionados -></h1>
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
        },
        {
          book_name: 'Corte de névoa e fúria', 
          book_image: bookCoverPink,
        },
        {
          book_name: 'Cidade da lua crescente', 
          book_image: bookCoverRed,
        },
        {
          book_name: 'Corte de rosas e espinhos', 
          book_image: bookCoverPurple,
        },
        {
          book_name: 'Corte de asas e ruínas', 
          book_image: bookCoverBlack
        },
      ]
    }
  },
}
</script>

<style src="~/assets/css/myBooks.css" scoped></style>
