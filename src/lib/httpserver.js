export default {
    install (Vue) {
        Vue.prototype.$http = (() => {
            var send = (value, method) => {
                return new Promise((resolve, reject) => {
                    ajax_post(
                        value,
                        data => {
                            var dataJson = JSON.parse(data)
                            resolve(dataJson)
                        },
                        null,
                        null,
                        method,
                        null,
                        err => {
                            reject(err)
                        }
                    )
                })
            }
            var get = value => {
                return send(value, 'GET')
            }

            var post = value => {
                return send(value, 'POST')
            }
            return {
                get: get,
                post: post
            }
        })()
    }
}
