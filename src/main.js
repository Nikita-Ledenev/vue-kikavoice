import Vue from 'vue';
import App from './App.vue';
import VueSvgInlinePlugin from 'vue-svg-inline-plugin';

Vue.config.productionTip = false;
Vue.use(VueSvgInlinePlugin);

VueSvgInlinePlugin.install(Vue, {
  attributes: {
    data: ['src'],
    remove: ['alt'],
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
