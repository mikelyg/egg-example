'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello world , egg !! ';
  }

  async demo() {
    const { ctx } = this;
    ctx.body = 'hello world , egg demo!! ';
  }
}

module.exports = HomeController;
