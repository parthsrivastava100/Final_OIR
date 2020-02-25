function sortTable(n,numb) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    if(numb == 1)table = document.getElementById("tb1");
    else if(numb==2)table = document.getElementById("tb2");
    else if(numb==3)table = document.getElementById("tb3");
    else if(numb==4)table = document.getElementById("tb4");
    else if(numb==5)table = document.getElementById("tb5");
    
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function change(n){
    console.log("reached");
    var table,id;
    if(n==1)id = "tb1";
    else if(n==2)id = "tb2";
    else if(n==3)id = "tb3";
    else if(n==4)id = "tb4";
    else if(n==5)id = "tb5";

    // document.getElementById("bar").getElementsByTagName("li")[id-1].getElementsByTagName("a").style.color = "red";
    document.getElementById("tb1").style.display = "none";
    document.getElementById("tb2").style.display = "none";
    document.getElementById("tb3").style.display = "none";
    document.getElementById("tb4").style.display = "none";
    document.getElementById("tb5").style.display = "none";
    document.getElementById(id).style.display = "table";

    
}