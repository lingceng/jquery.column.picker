/*!
 * jQuery Column Picker Plugin v1.1
 * @requires jQuery v1.3.2 or later
 *
 * Project repository: https://github.com/lingceng/jquery.column.picker
 *
 * Copyright 2012, lingceng
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2012-10-16
 * Version 1.1 2013-07-04
 */

(function( $, undefined ) {


/**
 * select or pickout columns
 * @param option array, string or object
 * 
 */
$.fn.pickout = function(option) {
    var table = $(this), arr;

    

   // option is object such as {picked: [0, 1, 2]}
   if ($.isPlainObject(option) && option.picked) {
        table.find("td,th").hide();
        
        arr = pickm(table, option.picked); 
        $(arr).each(function () {
            $(this).show();
        });
       
    } else {
        arr = pickm(table, option);
    }

    return arr;

  
};

/**
 * pick function decorator
 */
function pickm(table, option) {
    var arr = [];

    // option is arr such as  [0, 1, 2]
    if ($.isArray(option)) {
        arr = option;
    // option is string such as  "th[name=hello]", "td[name=hi]"
    } else if (typeof option === "string") {
        table.find(option).each(function (index, item) {
            arr.push($(item).index());
        });
    } else {
        throw "parameter is illegal";   
    } 
 

    return pick(table, arr);
}

/**
 * return picked columns
 *
 * @param table jQuery object refer to a table
 * @param arr index array to select
 *
 * @return array of columns, each column is a jquery object
 */
function pick(table, arr) {
    var  r=[];

    $(arr).each(function (i) {
        r.push(table.find("tr > :nth-child("+ (parseInt(arr[i], 10) + 1) +")"));
    });

    return r;    
}

})( jQuery );

