'use strict';


var Color = module.exports = function(buffer) {
  this.colorBuf = buffer;
  this.red = buffer.readUInt8(2);
  this.green = buffer.readUInt8(0);
  this.blue = buffer.readUInt8(1);
  this.alpha = buffer.readUInt8(3);
};

Color.prototype.grayScale = function() {
  this.average = (this.red + this.blue + this.green)/3;
  this.red = this.average;
  this.blue = this.average;
  this.green = this.average;
};