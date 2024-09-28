{
  /* <div id="greenButton"></div>
    <div id="blueButton"></div>
    <div id="redButton"></div>
    <div id="yellowButton"></div>
    <div id="orangeButton"></div>
    <div id="blackButton"></div>
    <div id="whiteButton"></div> */
}

const socket = io();
socket.on('draw', (message) => {
  console.log(message);
  prevX = message[0];
  prevY = message[1];
  currX = message[2];
  currY = message[3];
  color = message[4];
  draw();
});
const canvas = document.getElementById('canvas');

let prevX = 0;
let currX = 0;
let prevY = 0;
let currY = 0;

let color = 'black';
let thickness = 10;
const ctx = canvas.getContext('2d');

canvas.addEventListener('mouseenter', (e) => {
  currX = e.clientX - canvas.getBoundingClientRect().left;
  currY = e.clientY - canvas.getBoundingClientRect().top;
});
canvas.addEventListener('mousedown', (e) => {
  currX = e.clientX - canvas.getBoundingClientRect().left;
  currY = e.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener('mousemove', (e) => {
  if (e.buttons) {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.getBoundingClientRect().left;
    currY = e.clientY - canvas.getBoundingClientRect().top;
    draw();
    socket.emit('draw', [prevX, prevY, currX, currY, color]);
  }
});
const greenButton = document.getElementById('greenButton');
greenButton.addEventListener('click', () => {
  color = 'green';
});
const blueButton = document.getElementById('blueButton');
blueButton.addEventListener('click', () => {
  color = 'blue';
});
const redButton = document.getElementById('redButton');
redButton.addEventListener('click', () => {
  color = 'red';
});
const yellowButton = document.getElementById('yellowButton');
yellowButton.addEventListener('click', () => {
  color = 'yellow';
});
const orangeButton = document.getElementById('orangeButton');
orangeButton.addEventListener('click', () => {
  color = 'orange';
});
const blackButton = document.getElementById('blackButton');
blackButton.addEventListener('click', () => {
  color = 'black';
});
const whiteButton = document.getElementById('whiteButton');
whiteButton.addEventListener('click', () => {
  color = 'white';
});
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  reset();
});

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.stroke();
  ctx.closePath();
}

function reset() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
