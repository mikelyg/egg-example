module.exports = {
  schedule: {
    interval: '1m', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },

  // subscribe 是真正定时任务执行时被运行的函数
  async task() {
    const res = await this.ctx.curl('https://www.fastmock.site/mock/592fa6f5c7e536e7244812e0bd131662/egg/api/cache/userInfo', {
      dataType: "json"
    });
    this.ctx.app.cache = res.data
  }
}