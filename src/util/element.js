import {
  Cascader,
  Select,
  DatePicker,
  Option,
  Button,
  Tooltip,
  Scrollbar,
  Tabs,
  TabPane,
  Notification,
  Message,
  MessageBox,
  InputNumber,
  Input,
  ColorPicker,
  Form,
  Radio,
  RadioGroup,
  Slider,
  Collapse,
  CollapseItem,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/css/element.scss' //自定义主题颜色
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
  Vue.use(InputNumber)
  Vue.use(Input)
  Vue.use(ColorPicker)
  Vue.use(Form)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(Slider)
  Vue.use(Collapse)
  Vue.use(CollapseItem)

  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
  Vue.prototype.$msgbox = MessageBox
}
