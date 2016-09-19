'use strict';

var fs = require('fs');

module.exports = function(outputfileName, buffer, callback){
  fs.writeFile(`${__dirname}/../data/${outputfileName}.bmp`,buffer, function(err, data) {
    if(err) return callback (err);		    
    callback(null, data);	
  });		   
};
 
