import Empty from './src/empty'
/* istanbul ignore next */
Empty.install = function (Vue) {
  Vue.component(Empty.name, Empty)
}
export default Empty
