function sound(obj) {
  const song = document.getElementById(obj.id + "Sound");
  song.play();
}

function soundRelease(obj) {
  const song = document.getElementById(obj.id + "Sound");
  song.pause();
  song.currentTime = 0;
}
