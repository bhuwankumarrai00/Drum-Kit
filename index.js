// Store references to all drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Add click event listeners to each drum button
drumButtons.forEach((button) => {
  button.addEventListener("click", function() {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

// Add keypress event listener to the document
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  // Define an object to map keys to sound files
  const soundMap = {
    "w": "tom-1.mp3",
    "a": "tom-2.mp3",
    "s": "tom-3.mp3",
    "d": "tom-4.mp3",
    "j": "snare.mp3",
    "k": "crash.mp3",
    "l": "kick-bass.mp3"
  };

  // Check if the key exists in the soundMap
  if (soundMap.hasOwnProperty(key)) {
    const audio = new Audio(`sounds/${soundMap[key]}`);
    audio.play();
  } else {
    console.log(key);
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
