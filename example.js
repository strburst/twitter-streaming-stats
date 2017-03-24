const Streamer = require('./streamer');
const config = require('./config');
const debug = require('debug')('ths:example');

const stream = new Streamer({
  processors: [{ process: (tweet) => { debug(tweet.text); } }],
  secrets: config.secrets,
  timeout: 1000,
});
