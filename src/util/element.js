import { Cascader, Select, DatePicker, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default (Vue) => {
  Vue.use(Cascader)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(DatePicker)
}
