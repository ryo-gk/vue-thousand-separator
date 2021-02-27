import Vue from "vue";
import App from "./App.vue";
import VueThousandSeparator from '../lib/index'

Vue.config.productionTip = false;
Vue.use(VueThousandSeparator)

new Vue({
  render: h => h(App)
}).$mount("#app");
