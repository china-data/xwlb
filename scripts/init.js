const loadData = require('../src/loadData');
const moment = require('moment');

// 最早的 20120702
// const START = new Date('2013-08-27').getTime();
// const END = new Date('2014-12-31').getTime();
const START = new Date('2015-01-01').getTime();
const END = new Date('2016-12-31').getTime();

!(async () => {

  // 为防止给服务器太大压力，一次次请求
  const ONE_DAY = 1000 * 60 * 60 * 24;
  for (let date = START; date <= END; date += ONE_DAY) {

    const currentDate = moment(date).format('YYYYMMDD');
    console.log(`[${currentDate}] loading...`);
    loadData(currentDate);
    console.log(`[${currentDate}] finished!`);
  }
})();