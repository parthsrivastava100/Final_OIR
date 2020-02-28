var coll = document.getElementsByClassName("collapsible");
var counter = 0;
var prev = 0;
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      counter--;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      counter++;
    } 
    // console.log(counter, prev);
    if(counter>1){
      prev.classList.toggle("inactive");
      prev.nextElementSibling.style.maxHeight = null;
      counter--;
    }
    prev = this;
  });
  

}
