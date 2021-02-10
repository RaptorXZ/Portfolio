function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var x = document.getElementById("lightmodebutton");
     if (x.innerHTML === "Toggle Light Mode") {
     x.innerHTML = "Toggle Dark Mode";
     } else {
     x.innerHTML = "Toggle Light Mode";
     }
 }