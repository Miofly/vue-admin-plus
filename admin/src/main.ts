import { setupRouter } from '@/router';
import pinia from '@/store';
import { createApp } from 'vue';
import App from './App.vue';
import { initApplication } from './init-application';
import './styles';

(async () => {
  const app = createApp(App);
  app.use(pinia);
  await setupRouter(app);
  initApplication(app);
  app.mount('#app');
})();

// nextTick(() => {
//   pwa.register();
// });
