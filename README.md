##jquery.column.picker

###pick table columns out

<pre>
// pick columns use index array
$("table#monthTable").pickout([0, 1, 2]); 
</pre>

<pre>
// pick columns use cell selector string
$("table#monthTable").pickout("[name=hello]"); 
</pre>

<pre>
// pick columns and hide others 
$("table#monthTable").pickout({picked: "[name=hello]"}); 
</pre>
