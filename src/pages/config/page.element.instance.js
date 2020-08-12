import { v4 as uuidv4 } from 'uuid'
export class BoxElement {
  constructor(
    type = '',
    domindex = uuidv4(),
    frame = '',
    background = '',
    chartoption = {},
    componentoption = {},
    position = {
      x: 760,
      y: 410,
      w: 400,
      h: 260,
    }
  ) {
    this.type = type
    this.domindex = domindex
    this.frame = frame
    this.background = background
    this.chartoption = chartoption
    this.componentoption = componentoption
    this.position = position
  }
  //   //将对象添加到对应的arr里
  //   addChartoptionChild(arr) {
  //     if (Array.isArray(arr)) {
  //         console.log(arr)
  //     }
  //   }
}
export class ChartElement extends BoxElement {
  constructor(type, frame, background, data) {
    super(type, frame, background)
    this.data = data
  }
}
