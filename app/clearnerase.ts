import{ctx,canvas} from "./canvas"

//// colors white to erase
//// educated on color change by Ethan J Matte 
window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='e'){;
      ctx.strokeStyle = "White";
      ctx.fillStyle = "White";
    };
  }
); 

//// clears canvas 
window.addEventListener(
  "keypress",
  function(event) {
    if (event.key == "c") {
    ctx.clearRect(0, 0, 1500, 1500);
    }
  });
    
import {makeButton} from './controls';

let eraserButton = makeButton('Eraser');
eraserButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "White";
      ctx.fillStyle = "White";
    });

    