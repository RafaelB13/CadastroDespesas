function myFunction() {
    var x = document.getElementById("menuTop");
    if (x.className === "navT") {
        x.className += " responsive";
    }else{
        x.className = "navT"
    }
}