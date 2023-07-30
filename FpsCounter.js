var fpsCounter = document.createElement("div");
fpsCounter.className = "fixed bottom-0 left-0 font-segment text-green-500";
document.querySelector("body").appendChild(fpsCounter);

var startTime = Date.now();
var frame = 0;

function tick() {
    var time = Date.now();
    frame++;

    if (time - startTime > 1000) {
        fpsCounter.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(0);
        startTime = time;
        frame = 0;
    }

    window.requestAnimationFrame(tick);
}
tick();