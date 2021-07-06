import { createApp } from 'vue';
import 'virtual:windi.css';
import { router } from './routes';
import App from './App.vue';

if (import.meta.env.DEV) {
  import('./mocks/browser').then(({ worker }) => worker.start());
}

const app = createApp(App);

app.use(router);

app.mount('#app');
