'use strict';

module.exports = (buff) => {
  this.stringData =  buff.toString('hex',0,2);
  this.size = buff.readUInt32LE(2);
  this.startOffset = buff.readUInt32LE(10);
  this.colorArrayStart = 54;
  this.colorArrayLength = this.startOffset  - 54;
  this.colorArray = buff.slice(54,this.startOffset);
 //this.colorDataArray = [];
  return this;
};
