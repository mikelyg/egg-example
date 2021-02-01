const dayjs = require('dayjs');

exports.relativeTime = time => dayjs(new Date(time * 1000)).fromNow();