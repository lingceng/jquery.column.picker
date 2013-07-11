##jquery.column.picker

###pick table columns out easily

* pick columns use index array  
  
        // return the first, second and third colomns of the table
        $("table#monthTable").pickout([0, 1, 2]);   


* pick columns use cell selector string

        // pick columns by cell selector string
        // return the columns of cells with name=hello
        $("table#monthTable").pickout("th[name=hello]"); 


* pick columns by jQuery object 

        var head = $("th[name=hello]");
        // return the columns of cells with name=hello
        $("table#monthTable").pickout(head); 

* show the selected colomns and hide others

        // second parameter in pickout means wrapped return result as a object 
        // which is necessary for chaining showcol()
        $("table#monthTable").pickout("[name=hello]", true).showcol();

###version0.3 2013-7-11
* can select column using jQuery object representing a table cell
* add showcol() function to show and hide 

