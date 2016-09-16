'use strict';

const buff = require('./bitmap-file-read.js');
console.log('buffer', buff);
function FileInf() {
  this.stringData = buff.toString('hex',0,2);
  this.size = buff.readUInt32LE(2);
  this.startOffset = buff.readUInt32LE(10);
  this.colorArrayStart = 54;
  this.colorArrayEnd = this.startOffset  - 54;
  this.colorArray = [];
}

var fileInfo = new FileInf();
exports.colorsArray = function() {
  for(var i = 54; i< fileInfo.colorArrayEnd; i++ ) {
    fileInfo.colorArray.push(buff[i]);
    console.log(fileInfo.colorArray);
  }
};