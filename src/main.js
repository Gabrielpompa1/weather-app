import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

// Global styles
import './index.css';

// Stores
import Store from './store';

const store = createStore({
	modules: {
		Store,
	},
});

const app = createApp(App);

app.use(store);

app.mount('#app');
