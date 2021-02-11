function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var button = document.getElementById("lightmodebutton");
    button.classList.toggle("dark-button");

    var x = document.getElementById("lightmodecaption");
    if (x.innerHTML === "Toggle Light Mode") {
     x.innerHTML = "Toggle Dark Mode";
     } else {
     x.innerHTML = "Toggle Light Mode";
     }
 }