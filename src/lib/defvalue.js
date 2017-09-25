export default {
    install (Vue) {
        Vue.prototype.defvalue = (() => {
            var pops = {}
            var get = (key) => {
                return pops[key] ? pops[key] : false
            }
            var set = (key, value) => {
                pops[key] = value
            }
            return {
                get,
                set,
                pops
            }
        })()
    }
}
