const loadData = require('./src/loadData');
const moment = require('moment');

// 跑过去一周的新闻数据
const ONE_WEEK = 7;
for (let i = 1; i <= ONE_WEEK; i++) {
  loadData(moment().subtract(i, 'days').format('YYYYMMDD'));
}