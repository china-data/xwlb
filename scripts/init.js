const loadData = require('../src/loadData');
const moment = require('moment');

// 最早的 20120702
const START = new Date('2012-07-02').getTime();
const END = new Date('2012-12-31').getTime();

const ONE_DAY = 1000 * 60 * 60 * 24;
for (let date = START; date <= END; date += ONE_DAY) {
  loadData(moment(date).format('YYYYMMDD'));
}