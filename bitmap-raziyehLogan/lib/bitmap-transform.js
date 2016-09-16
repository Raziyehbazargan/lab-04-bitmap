'use strict';

//const buffer = require('./bitmap-file-read.js');

//define a constructor for Image File Info
function FileInfo(buff) {
  this.stringData = buff.toString('hex',0,2);
  this.size = buff.readUInt32LE(2);
  this.startOffset = buff.readUInt32LE(10);
  this.colorArrayStart = 54;
  this.colorArrayEnd = this.startOffset  - 54;
  this.colorArray = [];
}
module.exports = FileInfo;

//var fileInfo = new FileInfo(buffer);


// exports.colorsArray = function() {
//   for(var i = 54; i< fileInfo.colorArrayEnd; i++ ) {
//     fileInfo.colorArray.push(buff[i]);
//     console.log(fileInfo.colorArray);
//   }
// };