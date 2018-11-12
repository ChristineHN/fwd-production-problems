// Prevent users from ringing the doorbell multiple times in a row
var counter = 0;

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
    counter = counter + 1;
    if(counter == 1){
      doorbell.play();
      doorbell.onended = setCounterZero;
    }
    else{
      doorbell.onended = setCounterZero;
    }
};

function setCounterZero() {
  counter = 0;
}

// rings when the button is clicked
document.getElementById("bell").addEventListener("click", ringDoorbell);

// bonus task two; rings the door bell when a user clicks "d"
// d is 68 in ascii
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 68) {
    ringDoorbell();
  }
});
