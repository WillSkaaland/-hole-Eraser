import{ctx,canvas} from "./canvas"

//// educated on color change by Ethan J Matte 
window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='1'){;
      ctx.strokeStyle = "Black";
      ctx.fillStyle = "Black";
    };
  }
); 

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='2'){;
      ctx.strokeStyle = "Red";
      ctx.fillStyle = "Red";
    };
  }
); 



window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='3'){;
      ctx.strokeStyle = "Blue";
      ctx.fillStyle = "Blue";
    };
  }
); 

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='4'){;
      ctx.strokeStyle = "Green";
      ctx.fillStyle = "Green";
    };
  }
);  

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='5'){;
      ctx.strokeStyle = "Pink";
      ctx.fillStyle = "Pink";
    };
  }
); 

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='6'){;
      ctx.strokeStyle = "Purple";
      ctx.fillStyle = "Purple";
    };
  }
); 

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='7'){;
      ctx.strokeStyle = "Orange";
      ctx.fillStyle = "Orange";
    };
  }
); 

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='8'){;
      ctx.strokeStyle = "Yellow";
      ctx.fillStyle = "Yellow";
    };
  }
); 

window.addEventListener(
  "keydown",
  function(event){;
    if (event.key=='9'){;
      ctx.strokeStyle = "Gold";
      ctx.fillStyle = "Gold";
    };
  }
);  



//// color buttons on screen

import {makeButton} from './controls';

let blackButton = makeButton('Black');
blackButton.style.backgroundColor = 'black'
blackButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "Black";
      ctx.fillStyle = "Black";
    });

let redButton = makeButton('Red');
redButton.style.backgroundColor = 'red'
redButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "Red";
      ctx.fillStyle = "Red";
    });

let blueButton = makeButton('Blue');
blueButton.style.backgroundColor = 'blue'
blueButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "Blue";
      ctx.fillStyle = "Blue";
    });

let greenButton = makeButton('Green');
greenButton.style.backgroundColor = 'green'
greenButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "green";
      ctx.fillStyle = "green";
    });

let pinkButton = makeButton('Pink');
pinkButton.style.backgroundColor = 'pink'
pinkButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "Pink";
      ctx.fillStyle = "Pink";
    });

let purpleButton = makeButton('Purple');
purpleButton.style.backgroundColor = 'purple'
purpleButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "Purple";
      ctx.fillStyle = "Purple";
    });


let orangeButton = makeButton('Orange');
orangeButton.style.backgroundColor = 'orange'
orangeButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "orange";
      ctx.fillStyle = "orange";
  });

let yellowButton = makeButton('Yellow');
yellowButton.style.backgroundColor = 'yellow'
yellowButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "yellow";
      ctx.fillStyle = "yellow";
    });

let goldButton = makeButton('Gold');
goldButton.style.backgroundColor = 'gold'
goldButton.addEventListener(
  "click",
  function () {
      ctx.strokeStyle = "gold";
      ctx.fillStyle = "gold";
    });