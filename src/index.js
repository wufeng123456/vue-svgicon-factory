import SvgIcon from './svg-icon'

const components = [SvgIcon]

const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  SvgIcon
}