import Vue from 'vue';
import App from './App.vue';
import Nav from './components/nav.vue';
import Jumbo from './components/jumbotron.vue';

// register component
Vue.component('app-nav', Nav);
Vue.component('jumbo', Jumbo);

new Vue({
  el: '#app',
  render: h => h(App)
});
