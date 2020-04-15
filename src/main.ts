import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import './assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	i18n,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
