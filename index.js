var button = document.querySelector(".wrapper button");
var body = document.getElementsByTagName("body")[0];

button.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var o = Math.random();

    var color = "rgba(" + r + "," + g + "," + b + "," + o + ")";

    body.style.backgroundColor = color;
}