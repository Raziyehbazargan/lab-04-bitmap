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
    // this.chunkArray;
 var currentColor;
  for(var x = 0; x < colorArray.length; x += 4) {
    currentColor = colorArray.slice(x, x+4);
    currentColor[0] = 99;
    currentColor[1] = 99;
    currentColor[2] = 99;
    currentColor[3] = 99;
    console.log(currentColor);
  }
//   console.log('array chunk', this.chunkArray);
};

