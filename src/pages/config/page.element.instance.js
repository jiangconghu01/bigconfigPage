export class BoxElement {
  constructor(type = '', domindex = '', frame = '', background = '', chartoption = {}) {
    this.type = type
    this.domindex = domindex
    this.frame = frame
    this.background = background
    this.chartoption = chartoption
  }
}
export class ChartElement extends BoxElement {
  constructor(type, frame, background, data) {
    super(type, frame, background)
    this.data = data
  }
}
