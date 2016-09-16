'use strict';

module.exports = exports = {};

exports.colorArrayChange = function(headerData){
  this.colorDataArray = [];
  for(var i = 0; i < headerData.colorArrayLength; i++ ) {
    this.colorDataArray.push(headerData.colorArray.readUInt8(i));
  }
  console.log('colorArrayChange',  this.colorDataArray);
  return this;
};


exports.dataArrayMap = function(colorArray, colorDataArray){
  this.chunkArray = [];
  for(var x = 0; x < colorArray.colorArray.length; x += 4) {
    this.chunkArray.push(colorDataArray.colorDataArray.slice(x, x+4));
    // this.chunkArray[0] = 99;
  }
  console.log('array chunk', this.chunkArray);
};

