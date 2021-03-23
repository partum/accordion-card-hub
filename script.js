var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    console.log(this);
    if (this.nextElementSibling.style.display === "block") {
      this.classList.remove("active");
      this.nextElementSibling.style.display = "";
      //JS reads display:"none" as display:""
    } else if (this.nextElementSibling.style.display === "") {
      for (i = 0; i < acc.length; i++) {
        if (acc[i].nextElementSibling.style.display === "block") {
          acc[i].nextElementSibling.style.display = "";
          acc[i].classList.remove("active");
        }
      }
      this.classList.toggle("active");
      panel.style.display = "block";
    }
  });
}

/*
add code to have one section close when another opens
fix image transparency
fix overflow on body
*/
