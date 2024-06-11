<template>
  <Header />
  <div class="body_page hello">
    <div class="container_page container_about_us">
      <AboutUs />
    </div>
  </div>
  <div class="body_page position">
    <div class="container_page">
      <h4 class="title">Mais lidos</h4>
      <MorePopular />
    </div>
  </div>

  <div class="loop-container">
    <div class="loop-text">
      <p>Tudo o que você precisa é de um bom livro </p>
      <p>Tudo o que você precisa é de um bom livro </p>
      <p>Tudo o que você precisa é de um bom livro </p>
      <p>Tudo o que você precisa é de um bom livro </p>
      <p>Tudo o que você precisa é de um bom livro </p>
      <p>Tudo o que você precisa é de um bom livro </p>
      <p>Tudo o que você precisa é de um bom livro </p>
    </div>
  </div>

  <div class="body_page position">
    <div class="container_page">
      <h4 class="title">Todos os livros</h4>
      <AllBooks />
    </div>
  </div>

</template>

<script>
import AllBooks from '~/components/AllBooks.vue';
import AboutUs from '../../components/AboutUs.vue';

export default {
  name: 'BooksMenu'
}
</script>

<style scoped>
.hello {
  background-color: #c7c8f5;
}

.container_about_us {
  justify-content: center;
  display: flex;
}

.position {
  text-align: center;
}
.title {
  font-family: var(--font-title);
  font-size: 3rem;
  margin: 40px 0px 35px 0px;
}

.loop-container {
  overflow: hidden;
  width: 99.9%;
}

.loop-text {
  display: flex;
  background-color: #e96774;
  white-space: nowrap; /* Impede que o texto quebre para a próxima linha */
}

.loop-text p {
  margin: 0;
  padding: 50px 0;
  font-family: var(--font-highlight);
  color: #FFFFFF;
  font-size: 1rem;
  margin-right: 120px; /* Remove a margem padrão do parágrafo */
}
</style>
