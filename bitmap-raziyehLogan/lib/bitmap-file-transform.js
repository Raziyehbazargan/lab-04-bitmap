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


exports.dataArrayMap = function(colorArray){
  var currentColor, currentColorArray= [];
  for(var x = 0; x < colorArray.length; x += 4) {
    currentColor = colorArray.slice(x, x + 4);
    currentColorArray.push(currentColor);
  }
  return currentColorArray;
};

exports.changeImageColor = function(currentColorArray){
  for (var i = 0; i < currentColorArray.length; i++){
    currentColorArray[i] = currentColorArray[i] + 6;
  }
  return currentColorArray;
};
