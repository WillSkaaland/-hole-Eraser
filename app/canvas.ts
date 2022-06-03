let app : HTMLDivElement = document.querySelector('#app');
export let canvas = document.createElement('canvas');
export let ctx = canvas.getContext('2d');
export let width = 1500;
export let height = 1500;
canvas.width = width;
canvas.height = height;
app.style.width = `${width}px`;
app.style.height = `${height}px`;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

app.appendChild(canvas);
