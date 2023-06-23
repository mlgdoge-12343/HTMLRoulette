function deleteRandomLine() {
  // Retrieve all the elements in the body of the webpage
  const allElements = Array.from(document.querySelectorAll('body *'));

  if (allElements.length === 0) {
    return; // No elements found, exit the function
  }

  // Select a random element
  const randomElement = allElements[Math.floor(Math.random() * allElements.length)];

  // Remove the random element
  randomElement.remove();
}

// Call the deleteRandomLine function when the content script is injected
deleteRandomLine();
