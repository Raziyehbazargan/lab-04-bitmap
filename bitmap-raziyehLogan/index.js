'use strict';

const readFile = require('./lib/bitmap-file-read.js');
const Bitmap = require('./model/bitmap.js');
const fileTransform = require('./lib/bitmap-file-transform.js');

var fileHeaderData, colorDataArray;

function main(){
  readFile((data) => {
    var bitmap = Bitmap(data);
    console.log('bitmap', bitmap)
    fileTransform.dataArrayMap(bitmap.colorArray);
    // fileTransform.dataArrayMap(fileHeaderData,colorDataArray)
    // save the file after the change
  });
}

main();