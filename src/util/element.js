import { Cascader, Select, DatePicker, Option, Button, Tooltip, Scrollbar, Tabs, TabPane, Notification, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default (Vue) => {
  Vue.use(Cascader)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(DatePicker)
  Vue.use(Button)
  Vue.use(Tooltip)
  Vue.use(Scrollbar)
  Vue.use(Tabs)
  Vue.use(TabPane)

  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}
