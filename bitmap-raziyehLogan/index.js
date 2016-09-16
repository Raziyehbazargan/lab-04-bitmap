'use strict';

const readFile = require('./lib/bitmap-file-read.js');
const fileHeader = require('./lib/bitmap-file-info.js');
const fileTransform = require('./lib/bitmap-file-transform.js');



var fileHeaderData, colorDataArray;

function main(readFile, fileHeader){
  readFile((data) => {
    fileHeaderData = fileHeader.fileInfo(data);
    colorDataArray = fileTransform.colorArrayChange(fileHeaderData);
    fileTransform.dataArrayMap(fileHeaderData,colorDataArray);
  });
}

main(readFile, fileHeader, fileTransform);