/*!
 * jQuery Column Picker Plugin v0.1
 * @requires jQuery v1.3.2 or later
 *
 * Project repository: https://github.com/lingceng/jquery.column.picker
 *
 * Copyright 2012, lingceng
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2012-10-16
 */

(function( $, undefined ) {

$.fn.pickout = function(option) {
  console.log("in pickout");
  var picked = option.picked;

  if (!picked) {
    return null;
  }

  
  // show referred columns
  var lines = $(this).find("tr");
  
  
  // do for every line
  lines.each(function (){
    // do for every cell
    $(this).children().each(function (i) {
      // if cell index in the array then show
      if (contains(i, picked)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
  
  
  
}

// whether item in array
function contains(item, array) {
  for (var i in array) {
    if (array[i] == item) {
      return true;
    }
  }

  return false;
}

})( jQuery );

