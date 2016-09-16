'use strict';

//define a object for Image File Info
module.exports = exports = {};

exports.fileInfo = (buff) => {
  this.stringData =  buff.toString('hex',0,2);
  console.log('stringData ', this.stringData);
  this.size = buff.readUInt32LE(2);
  console.log('size: ' ,this.size);
  this.startOffset = buff.readUInt32LE(10);
  console.log('startOffset: ' ,this.startOffset);
  this.colorArrayStart = 54;
  console.log('colorArrayStart: ' ,this.colorArrayStart);
  this.colorArrayEnd = this.startOffset  - 54;
  console.log('colorArrayEnd: ' ,this.colorArrayEnd);
  this.colorArray = [];
  console.log('colorArray: ' ,this.colorArray);

};


exports.colorsArray = ((buff)=> {
  for(var i = 54; i < this.colorArrayEnd; i++ ) {
    console.log(buff.readUInt8[4]);
    //this.colorArray.push(buff.readUInt8[i]);

   // console.log('colorArray :', this.colorArray);
  }
});