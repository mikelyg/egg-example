const BAR = Symbol("application#bar")

module.exports = {
  // 方法扩展
  foo(param) {
    // this app 对象，可以在其中调用 app 上的方法
  },

  // 属性扩展
  get bar() {
    if(!this[BAR]){
      this[BAR] = this.config.xx + this.config.yy
    }
    return this[BAR]
  }
}