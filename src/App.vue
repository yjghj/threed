<template>
    <div id="app">
        <Navbar v-if="showLoginPage"></Navbar>
        <router-view class="viewbody"></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    name: 'app',
    data () {
		return {
            showLoginPage: false
        }
	},
    methods: {
        openLoginPage () {
            this.showLoginPage = !this.showLoginPage;
            // this.defvalue.set()
        }
    },
    beforeCreate: function () {
        
        
        // this.$http.get({
        //         'serviceName': 'HMJ_BUV1_brandstoreinfo',
        //         'param':
        //         {
        //             'city_name': '成都'
        //         },
        //         'needAll': 1
        // }).then((res) => {
        //     console.log(res)
        // }, (err) => {
        //     console.log(err)
        // })
    },
    components: { Navbar }
}
</script>

<style lang='less'>
* {
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
}

.viewbody{
    width: 1200px;
    margin:auto;
}
</style>