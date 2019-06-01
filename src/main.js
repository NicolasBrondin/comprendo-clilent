import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "https://ze6zp.sse.codesandbox.io"
    /* vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: { path: "/my-app/" } //Optional options
*/
  })
);

new Vue({
  render: h => h(App)
}).$mount("#app");
