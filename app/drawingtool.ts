import { ctx, canvas } from "./canvas"
export let mouse = { x:0,y:0 }

canvas.addEventListener("mousedown", function(event) {
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", function(event) {
  if (event.buttons === 1) {
    mouse.x = event.offsetX 
    mouse.y = event.offsetY 
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





