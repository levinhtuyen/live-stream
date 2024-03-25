import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import './assets/element-theme/index.css';
import './assets/index.scss';
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'
import './modules'


Vue.use(ElementUI, { locale });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
