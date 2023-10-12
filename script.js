// Get all elements with the "list" class
let lists = document.querySelectorAll(".list");

// Get the right and left box elements
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");

// Add a drag and drop event listener to each list item
lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    // Store the selected item in the "selected" variable
    let selected = e.target;

    // Add a "dragover" event listener to the right box to allow dropping
    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // Add a "drop" event listener to the right box to handle dropping
    rightBox.addEventListener("drop", (e) => {
      // Append the selected item to the right box
      rightBox.appendChild(selected);

      // Reset the "selected" variable
      selected = null;
    });

    // Add a "dragover" event listener to the left box to allow dropping
    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // Add a "drop" event listener to the left box to handle dropping
    leftBox.addEventListener("drop", (e) => {
      // Append the selected item to the left box
      leftBox.appendChild(selected);

      // Reset the "selected" variable
      selected = null;
    });
  });
});
