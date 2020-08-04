import Vue from 'vue'
import App from './App.vue'
import './plugins'; //tự động tìm tới file index.js

new Vue({
  el: '#app',
  render: h => h(App)
})
//mỗi thành phần trong web tương ứng mỗi component => mỗi component tương ứng với 1 file .vue
