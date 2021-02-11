function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var button1 = document.getElementById("lightmodebutton");
    button1.classList.toggle("dark-button");

    var button2 = document.getElementById("gototop");
    button2.classList.toggle("dark-button");

    var x = document.getElementById("lightmodecaption");
    if (x.innerHTML === "Toggle Light Mode") {
     x.innerHTML = "Toggle Dark Mode";
     } else {
     x.innerHTML = "Toggle Light Mode";
     }
 }