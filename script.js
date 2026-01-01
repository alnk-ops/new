// Select button and result paragraph
const fetchBtn = document.getElementById("fetchBtn");
const apiResult = document.getElementById("apiResult");

// Add click event to fetch button
fetchBtn.addEventListener("click", function () {

  // Fetch data from a public API (Random Joke API)
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
      // Convert response to JSON
      return response.json();
    })
    .then(function (data) {
      // Display the joke on the webpage
      apiResult.textContent = data.setup + " - " + data.punchline;
    })
    .catch(function () {
      // Error handling
      apiResult.textContent = "Error fetching data!";
    });
});


/* ===============================
   TODO LIST SECTION
   =============================== */

// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add click event to Add Task button
addTaskBtn.addEventListener("click", function () {

  // Get input value
  const taskText = taskInput.value;

  // If input is empty, do nothing
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Create span to hold task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Click to mark task as completed
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Delete task when clicked
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});