const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');

module.exports = async (date) => {
  const fileName = path.join(
    __dirname,
    `../assets/${moment(date).format('YYYY')}/${moment(date).format('YYYYMMDD')}.json`
  );

  const list = await fetch(
    `https://api.cntv.cn/list/getWxVideoList?lm=xwlb&date=${date}&mode=1&serviceId=lianboplus&sort=asc&n=100`
  ).then(d => d.json());

  for (let i = 0; i < list.videoList.length; i++) {
    const item = list.videoList[i];
    try {
      const detail = await fetch(
        `https://api.cntv.cn/Article/contentinfo?serviceId=lianboplus&id=${item.video_id}`
      ).then(d => d.json());

      item.video_detail = detail;
    } catch (e) {}
  }

  fs.outputJsonSync(fileName, list);
}
