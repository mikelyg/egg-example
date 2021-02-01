const Controller = require('egg').Controller;
const dayjs = require('dayjs')

class MainController extends Controller {
  async index() {
    this.ctx.body = new Date().getTime()
  }
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    // const dataList = await ctx.service.news.list(page)

    const dataList = {
      list:[
        {id:1, title:'this is good news 1 ha', url:'/news/1', time: dayjs('2018-04-04T16:00:00.000Z')},
        {id:2, title:'this is good news 2 haha', url:'/news/2', time: dayjs('2020-04-04T16:00:00.000Z')},
      ]
    };
    await this.ctx.render('news/list.tpl', dataList)
  }
}

module.exports = MainController;