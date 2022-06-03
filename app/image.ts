let assetDiv : HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none'; 

import EraserUrl from './assets/eraser.jpg'

export let EraserImage = document.createElement('img');
EraserImage.src = EraserUrl;
assetDiv.appendChild(EraserImage);

