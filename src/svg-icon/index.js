import SvgIcon from './index.vue'

SvgIcon.install = (Vue) => {
  Vue.component(SvgIcon.name, SvgIcon)
}


// 引入svg
const requireAll = requireContext => requireContext.keys().map(context => requireContext(context))
const svgs = require.context('./assets', false, /\.svg$/)
requireAll(svgs)

export default SvgIcon