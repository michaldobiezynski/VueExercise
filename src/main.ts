import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

library.add(faSearch);
library.add(faPlus);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router)
  .mount('#app');
