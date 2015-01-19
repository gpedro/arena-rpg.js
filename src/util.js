'use strict';

module.exports = {

  createArray: function(x, y) {
    var arr = [];

    for(var i=0; i < x; ++i){
        arr.push([]);
        arr[i].push( new Array(y));

        for(var j=0; j < y; ++j){
          arr[i][j] = undefined;
        }
    }

    return arr;
  }

};
