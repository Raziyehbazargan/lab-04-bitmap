'use strict';

module.exports = exports = {};


exports.dataArrayMap = function(colorArray){
  var currentColor, currentColorArray = [];
  for(var x = 0; x < colorArray.length; x += 4) {
    currentColor = colorArray.slice(x, x + 4);
    currentColor[0] = 255;
    currentColor[1] = 255;
    currentColor[2] = 0;
    currentColor[3] = 120;
    currentColorArray.push(currentColor);
  }
  return currentColorArray;
};

