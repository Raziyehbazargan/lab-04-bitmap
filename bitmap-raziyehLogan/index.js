'use strict';

const main = require('./lib/bitmap-file-read.js');
//const transform = require('./lib/bitmap-transform.js');

var buffer;
module.exports = buffer;
main((data) =>{
  buffer = data;
  console.log('index data console',buffer);

});

