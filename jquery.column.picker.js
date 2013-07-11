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
$.fn.pickout = function(option, wrapjquery) {
    var table = $(this), ret;

    if (!option) {
        throw "parameter is illegal"; 
    }


   // @deprecated
   // option is object such as {picked: [0, 1, 2]}
   if ($.isPlainObject(option) && option.picked) {
        table.find("td,th").hide();
        
        ret = pickm(table, option.picked, wrapjquery); 
        $(ret).each(function () {
            $(this).show();
        });
       
    } else {
        ret = pickm(table, option, wrapjquery);
    } 

    return ret;

  
};

/**
 * pick function decorator
 */
function pickm(table, option, wrapjquery) {
    var arr = [], ret;

    // option is arr such as  [0, 1, 2]
    if ($.isArray(option)) {
        arr = option;
    // option is string such as  "th[name=hello]", "td[name=hi]"
    } else if (typeof option === "string") {
        arr = indexarr(table.find(option));
    } else if (option.jquery) {
        arr = indexarr(option);
    } else {
        throw "parameter is illegal";   
    } 
 
    ret =  pick(table, arr);

    if (wrapjquery === true) {
        ret = $(ret);
        /**
         * @keepother whether to keep other columns
         */
        ret.showcol = function (keepother) {
            if (keepother) {
                table.find("td,th").hide();
            } 
            this.each(function () {
                 $(this).show();
            });
        }
    }

    return ret;
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

/**
 * return index array
 */
function indexarr(jqobj) {
    var arr = [];
    jqobj.each(function (index, item) {
            arr.push($(item).index());
    })
    return arr;
}

})( jQuery );

