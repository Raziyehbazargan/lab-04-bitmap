'use strict';

const fs = require('fs');

//module.exports = exports = {};

module.exports = function(callback) {
  var filePath = `${__dirname}/../data/bitmap.bmp`;
  fs.readFile(filePath, function(err, data) {
    if (err) throw err;
    console.log(data);
    return callback(data);
  });
};
