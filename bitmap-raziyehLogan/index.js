'use strict';

const readFile = require('./lib/bitmap-file-read.js');
const Bitmap = require('./model/bitmap.js');
const fileTransform = require('./lib/bitmap-file-transform.js');

//var fileHeaderData, colorDataArray;

function main(){
  readFile((data) => {
    var bitmap = Bitmap(data);
    console.log('bitmap', bitmap);
    var changeBuff = fileTransform.dataArrayMap(bitmap.colorArray);
    //var changedImage = fileTransform.changeImageColor(changeBuff);
    console.log('changedImage', changeBuff);
  });
}

main();