'use strict';

const Color = require('../model/color.js');
module.exports = exports = {};


exports.dataArrayMap = function(colorArray){
  var currentColor,
    currentColorArray = [],
    newColor;
    
  for(var x = 0; x < colorArray.length; x += 4) {
    currentColor = colorArray.slice(x, x + 4);
    newColor = new Color(currentColor);
    newColor.grayScale();
    currentColorArray.push(newColor);
    console.log(currentColorArray);
  }
  return currentColorArray;
};
