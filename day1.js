// Function to play sound and trigger animation
function playSound(event) {
  // Select the <audio> element corresponding to the pressed key
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // Select the key <div> element corresponding to the pressed key
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  // If there's no audio element for the pressed key, stop the function
  if (!audio) return;
  // Rewind the audio to the start in case it's already playing
  audio.currentTime = 0;
  // Play the audio
  audio.play();
  // Add the "playing" class to the key to trigger the CSS animation
  key.classList.add("playing");
}

// Function to remove the "playing" class after the animation ends
function removeTransition(event) {
  // Ensure this function only runs when the "transform" property changes
  if (event.propertyName !== "transform") return;
  // Remove the "playing" class from the key
  this.classList.remove("playing");
}

// Select all key <div> elements
const keys = document.querySelectorAll(".key");
// Add an event listener to remove the "playing" class after the animation ends
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Add an event listener to detect key presses and play the corresponding sound
window.addEventListener("keydown", playSound);
