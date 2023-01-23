const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = './Images/Pokemon-Style-Game-Map-Zoom.png';

const playerImage = new Image();
playerImage.src = './Images/playerDown.png';

class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
  }
}

const background

function animate() {
  window.requestAnimationFrame(animate);
  context.drawImage(mapImage, -1221, -700);
  context.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 3.9,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
}
animate();

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      console.log('pressed w key');
      break;
    case 'a':
      console.log('pressed a key');
      break;
    case 's':
      console.log('pressed s key');
      break;
    case 'd':
      console.log('pressed d key');
      break;
  }
});
