function sound(obj) {
  const song = document.getElementById(obj.id + "Sound");
  song.play();
}

function soundRelease(obj) {
  const song = document.getElementById(obj.id + "Sound");
  song.pause();
  song.currentTime = 0;
}
document.querySelectorAll('.big').forEach(key => {
  key.addEventListener('mousedown', () => sound(key));
  key.addEventListener('mouseup', () => soundRelease(key));
  key.addEventListener('touchstart', () => sound(key));
  key.addEventListener('touchend', () => soundRelease(key));
});
document.querySelectorAll('.small').forEach(key => {
  key.addEventListener('mousedown', () => sound(key));
  key.addEventListener('mouseup', () => soundRelease(key));
  key.addEventListener('touchstart', () => sound(key));
  key.addEventListener('touchend', () => soundRelease(key));
});