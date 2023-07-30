// var canvas = document.createElement("canvas");
var canvas = document.getElementById("canvas");
// canvas.className = "block -z-1";
// document.body.appendChild(canvas);

var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("");

var font_size = 10;
var columns = canvas.width / font_size;

var drops = [];
for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.04)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#005000";
    context.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        context.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 35);
