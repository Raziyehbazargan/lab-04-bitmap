'use strict';

var fs = require('fs');

module.exports = function(buffer){
  fs.writeFile(`${__dirname}/../data/bitmap.bmp`,buffer);
};