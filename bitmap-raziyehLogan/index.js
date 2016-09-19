'use strict';

const Bitmap = require('./model/bitmap.js');
const readFile = require('./lib/bitmap-file-read.js');
const writeFile = require('./lib/bitmap-file-write.js');
const fileTransform = require('./lib/bitmap-file-transform.js');

function main(){
  readFile((data) => {
    var bitmap = Bitmap(data);
    fileTransform.dataArrayMap(bitmap.colorArray);
    writeFile('changedImage',bitmap.buffer, (data)=>{console.log('Done',data);});
  });
}

main();