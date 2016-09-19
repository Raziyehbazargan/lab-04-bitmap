'use strict';

const readFile = require('./lib/bitmap-file-read.js');
const Bitmap = require('./model/bitmap.js');
const fileTransform = require('./lib/bitmap-file-transform.js');
const writeFile = require('./lib/bitmap-file-write.js');
//var fileHeaderData, colorDataArray;

function main(){
  readFile((data) => {
    var bitmap = Bitmap(data);
    //fileTransform.colorArrayChange(bitmap);
    var changeBuff = fileTransform.dataArrayMap(bitmap.colorArray);
    //var changedImage = fileTransform.changeImageColor(changeBuff);
    console.log('changedImage', changeBuff);
    writeFile(bitmap.buffer);
  });
}

main();