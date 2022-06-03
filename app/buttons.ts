import {ctx, canvas} from './canvas';
import {makeButton} from './controls';

let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)
