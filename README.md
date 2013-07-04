##jquery.column.picker

###pick table columns out

  // pick columns use index array
  $("table#monthTable").pickout([0, 1, 2]); 

  // pick columns use cell selector string
  $("table#monthTable").pickout("[name=hello]"); 
  
  // pick columns and hide others 
  $("table#monthTable").pickout({picked: "[name=hello]"}); 

