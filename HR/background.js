var countdown = 60; // Initial countdown value (in seconds)

function updateCountdown() {
  chrome.browserAction.setBadgeText({ text: countdown.toString() });
  countdown--;

  if (countdown < 0) {
    deleteRandomLine(); // Call the function to delete a random line
    countdown = 60; // Reset the countdown
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
