'use strict';

const fs = require('fs');

//module.exports = exports = {};

module.exports = function(filePath) {
  filePath = `${__dirname}/../data/bitmap.bmp`;
  fs.readFile(filePath, function(err, data) {
    if (err) throw err;
    console.log(data);
    console.log('size', data.readUInt32LE(2));
    var startOffset = data.readUInt32LE(10);
    console.log('start offset', data.readUInt32LE(10));
    console.log('Number of colors', data.readUInt32LE(46));
    console.log('bytes per color', (data.readUInt32LE(10) - 54) / 256);
    var colorArrayStart = 54;
    console.log(colorArrayStart);
    var colorArrayEnd = startOffset  - 54;
    console.log('pixels', (data.readUInt32LE(2) - data.readUInt32LE(10)));
    var colorArray =[];
    for(var i = 54; i < colorArrayEnd; i++ ) {
      console.log(data);
      colorArray.push(data.readUInt8[i]);
      //console.log(colorArray);
    }
  });
};


// const fileBitmapInf = exports.readFile = function(buff) {
//     console.log(buff);
//   console.log('size', buff.readUInt32LE(2));
//   var startOffset = buff.readUInt32LE(10);
//   console.log('start offset', buff.readUInt32LE(10));
//   console.log('Number of colors', buff.readUInt32LE(46));
//   console.log('bytes per color', (buff.readUInt32LE(10) - 54) / 256);
//   var colorArrayStart = 54;
//   console.log(colorArrayStart);
//   var colorArrayEnd = startOffset  - 54;
//   console.log('pixels', (buff.readUInt32LE(2) - buff.readUInt32LE(10)));
// };

// exports.colorMan = function(fileDetails,buff) {
//   var colorArray =[];
//   var colorArrayEnd= 1078-54;
//   for(var i = 54; i< colorArrayEnd; i++ ) {
//     colorArray.push(buff[i]);
//     console.log(colorArray);
//   }
// };
        