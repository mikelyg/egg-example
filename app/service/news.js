const Service = require('egg').Service;

class NewService extends Service {
  async list(page = 1){
    const { serverUrl, pageSize } = this.config.news;
    console.log('@@@@@@@@@@@@@@@@@@@@@ serverUrl: ', serverUrl, 'pageSize: ', pageSize);

    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      // data: {
      //   orderBy: '"$key"',
      //   startAt: `"${pageSize * (page - 1)}"`,
      //   endAt: `"${pageSize * page - 1}"`,
      // },
      method: 'GET',
      dataType: 'json',
    });
    console.log('#########idList', idList);
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );
    return newsList.map(res => res.data);
  }
}

module.exports = NewService;