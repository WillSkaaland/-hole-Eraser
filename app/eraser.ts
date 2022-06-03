import { mouse } from './drawingtool'
import { EraserImage } from './image' ;
import {ctx} from './canvas';


export let eraser = {
  x: 250,
  y: 0,
}

function animate () {
 ctx.clearRect(eraser.x,eraser.y,40,40)
 let d = Math.sqrt(
   Math.pow((eraser.x - mouse.x),2) +
   Math.pow((eraser.y - mouse.y),2)
 )
  let xcomponent = (mouse.x-eraser.x)/d
  let ycomponent = (mouse.y-eraser.y)/d
  eraser.x+= 5 * xcomponent 
  eraser.y+= 5 * ycomponent
  /*let slope = (mouse.y-eraser.y)/(mouse.x-eraser.x)
  debugger;
  if (mouse.x>eraser.x) {
     eraser.x += 1;
    eraser.y+=slope
  }  else{
    eraser.x-=1;
    eraser.y-=slope
  }
old slope code, cant divide by zero, makes cookie monster sad and you without friends, well, you already had no friends so no change then, you just hurt a blue monster for no reason.
*/
  ctx.drawImage(
    EraserImage,eraser.x,eraser.y,
    40,40
  )
 
  setTimeout(animate, 200)
}

animate()
let lastpos = {
  x:0,
  y:0,
};
function cheapbastardmove () {
  if (mouse.x==lastpos.x && mouse.y==lastpos.y) {
    mouse.x=Math.random()*1500;
    mouse.y=Math.random()*1500;
  } 
  lastpos.x=mouse.x
  lastpos.y=mouse.y
  setTimeout(cheapbastardmove, 7000)
}
cheapbastardmove()