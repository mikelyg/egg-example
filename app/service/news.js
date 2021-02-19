const Service = require('egg').Service;

class NewService extends Service {
  async list(page = 1, pageSize = 10){
    const { serverUrl } = this.config.news;
    console.log('@@@@@@@@@@@@@@@@@@@@@ serverUrl: ', serverUrl, 'pageSize: ', pageSize, page);

    const { data: idList} = await this.ctx.curl('https://www.fastmock.site/mock/592fa6f5c7e536e7244812e0bd131662/egg/news/list', {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page}"`,
      },
      method: 'GET',
      dataType: 'json',
    });
    
    console.log('service ######### idList', idList);

    return idList;
  }
}

module.exports = NewService;