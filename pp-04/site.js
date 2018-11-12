function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

document.getElementById("bell").addEventListener("click", ringDoorbell);
