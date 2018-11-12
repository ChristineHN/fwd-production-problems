function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

// rings when the button is clicked
document.getElementById("bell").addEventListener("click", ringDoorbell);

// bonus task two; rings the door bell when a user clicks "d"
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 68) {
    ringDoorbell();
  }
});
