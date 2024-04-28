import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import Card from './components/Card.vue';

const app = createApp(App);
app.component('base-badge', BaseBadge);
app.component('card',Card);
app.mount('#app');
