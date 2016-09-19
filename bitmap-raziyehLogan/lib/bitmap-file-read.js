'use strict';

const fs = require('fs');

module.exports = function(callback) {
  var filePath = `${__dirname}/../data/bitmap.bmp`;
  fs.readFile(filePath, (err, data) => {
    if (err) callback(err);
    callback(data); 
  });
};
