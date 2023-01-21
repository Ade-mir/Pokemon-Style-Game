const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 570;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = './Images/Pokemon-Style-Game-Map-Zoom.png';

const playerImage = new Image();
playerImage.src = './Images/ACharDown.png';

mapImage.onload = () => {
  context.drawImage(mapImage, -1180, -650);
  context.drawImage(playerImage, 0, 0);
};
