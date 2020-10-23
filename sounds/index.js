//set a global variable to use between functions
var soundName;

//take the info provided from the click or keypress and pass the file name to playSound
function findFileName(eventInfo) {
  //pull the info from the eventInfo object and put it into mouseClick and keyCode
  let mouseClick = eventInfo.path[0].classList[0];
  let keyPress = eventInfo.keyCode;
  //keep mouseClick and keyCode from conflicting
  if (keyPress !== undefined) {
    mouseClick = undefined;
  }
  //determine the proper filenames for the sounds
  if (mouseClick === "w" || keyPress === 87) {
    soundName = "tom-1";
    playSound();
  } else if (mouseClick === "a" || keyPress === 65) {
    soundName = "tom-2"
    playSound();
  } else if (mouseClick === "s" || keyPress === 83) {
    soundName = "tom-3";
    playSound();
  } else if (mouseClick === "d" || keyPress === 68) {
    soundName = "tom-4";
    playSound();
  } else if (mouseClick === "j" || keyPress === 74) {
    soundName = "snare";
    playSound();
  } else if (mouseClick === "k" || keyPress === 75) {
    soundName = "crash";
    playSound();
  } else if (mouseClick === "l" || keyPress === 76) {
    soundName = "kick-bass";
    playSound();
  }
}
//play the right sound using info provided from findFileName
function playSound() {
  document.getElementById('drumSound').src = ("sounds/" + soundName + ".mp3");
  document.getElementById('drumSound').play();
}
//select all the buttons and run eventAdd function for each of them
document.querySelectorAll('button').forEach(eventAdd);

//add the click listener to each button
function eventAdd() {
  this.addEventListener('click', findFileName);
}

//listen for keyboard keypress while on the webpage
document.addEventListener('keydown', findFileName);
