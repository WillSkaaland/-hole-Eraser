import { ctx, canvas } from "./canvas"

canvas.addEventListener("mousedown", function(event) {
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", function(event) {
  if (event.buttons === 1) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
});

let fillMode = false;

canvas.addEventListener("mouseup", function(event) {
  if (fillMode == true) {
    ctx.fill()
  }
  else { ctx.stroke() }
});

let clearButton = makeButton('ToggleFill');
clearButton.addEventListener(
  "click",
  function() {
    fillMode = !fillMode
  }
)
import { makeButton } from './controls';

