require('dotenv').config()

export default {
  loading: false,
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/global.css',
  ],
  devServer: {
    port: 5000
  },
  components: true,
  build: {
  }
}