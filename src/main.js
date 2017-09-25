// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpserver from './lib/httpserver'
import defvalue from './lib/defvalue'

Vue.use(httpserver)
Vue.use(defvalue)
Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
window.vm = new Vue({
    el: '#app',
    router,
    template: '<App ref="el"/>',
    methods: {
        login () {
            this.$refs.el.openLoginPage()
        }
    },
    components: { App }
})
