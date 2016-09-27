'use strict';

var Color = module.exports = function(buffer) {
  this.colorBuf = buffer;
  this.red = buffer.readUInt8(2);
  this.green = buffer.readUInt8(0);
  this.blue = buffer.readUInt8(1);
  this.alpha = buffer.readUInt8(3);
};

Color.prototype.write = function(){
  this.colorBuf.writeUInt8(this.red,2);
  this.colorBuf.writeUInt8(this.green,0);
  this.colorBuf.writeUInt8(this.blue,1);
  this.colorBuf.writeUInt8(this.alpha,3);
};

Color.prototype.grayScale = function() {
  this.average = (this.red + this.blue + this.green)/3;
  this.red = this.average;
  this.blue = this.average;
  this.green = this.average;
  this.write();
};
