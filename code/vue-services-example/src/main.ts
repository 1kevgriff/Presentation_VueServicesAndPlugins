import Vue from 'vue';
import App from './App.vue';

import { Logger } from "./services/logger";
import { LoggerOptions } from './services/logger/loggerOptions';


Vue.config.productionTip = false

const loggerSettings: LoggerOptions = {
  isEnabled: process.env.NODE_ENV  !== "production"
};

Vue.use(Logger, loggerSettings);

new Vue({
  render: h => h(App),
}).$mount('#app')
