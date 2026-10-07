document.addEventListener("DOMContentLoaded", function() {


let tasks = [
    "Complete GitHub assignment",
    "Study for programming test",
    "Submit university project"
];

console.log("Student Task Manager started");
console.log("Total tasks:", tasks.length);


/* =========================
   GET HTML ELEMENTS
========================= */

let taskTitle = document.getElementById("task-title");
let taskDescription = document.getElementById("task-description");
let addTaskButton = document.getElementById("add-task-button");

let searchInput = document.getElementById("task-search");
let taskList = document.getElementById("task-list");
let noTasksMessage = document.getElementById("no-tasks-message");


/* =========================
   ADD TASK
========================= */

addTaskButton.addEventListener("click", function() {

    let title = taskTitle.value.trim();
    let description = taskDescription.value.trim();


    /* Check if title is empty */

    if (title === "") {
        alert("Please enter a task title.");
        taskTitle.focus();
        return;
    }


    /* Create task */

    let newTask = document.createElement("div");
    newTask.className = "task";


    /* Create task information */

    let taskInfo = document.createElement("div");
    taskInfo.className = "task-info";


    let titleElement = document.createElement("h3");
    titleElement.textContent = title;

    taskInfo.appendChild(titleElement);


    /* Add description if available */

    if (description !== "") {

        let descriptionElement = document.createElement("p");

        descriptionElement.textContent = description;

        taskInfo.appendChild(descriptionElement);
    }


    /* Create status */

    let statusElement = document.createElement("span");

    statusElement.className = "status";
    statusElement.textContent = "Pending";


    /* Put everything inside task */

    newTask.appendChild(taskInfo);
    newTask.appendChild(statusElement);


    /* Add task to page */

    taskList.appendChild(newTask);


    /* Add task to array */

    tasks.push(title);


    console.log("New task added:", title);
    console.log("Total tasks:", tasks.length);


    /* Clear input fields */

    taskTitle.value = "";
    taskDescription.value = "";


    /* Update summary */

    updateSummary();


    /* Search again */

    searchTasks();

});


/* =========================
   SEARCH TASKS
========================= */

searchInput.addEventListener("input", function() {

    searchTasks();

});


function searchTasks() {

    let searchText = searchInput.value.toLowerCase().trim();

    let taskItems = taskList.querySelectorAll(".task");

    let foundTasks = 0;


    taskItems.forEach(function(task) {

        let taskText = task.textContent.toLowerCase();


        if (taskText.includes(searchText)) {

            task.style.display = "flex";

            foundTasks++;

        }
        else {

            task.style.display = "none";

        }

    });


    /* Show or hide no-results message */

    if (foundTasks === 0) {

        noTasksMessage.style.display = "block";

    }
    else {

        noTasksMessage.style.display = "none";

    }

}


/* =========================
   UPDATE SUMMARY
========================= */

function updateSummary() {

    let taskItems = taskList.querySelectorAll(".task");

    let total = taskItems.length;

    let completed = 0;

    let pending = 0;


    taskItems.forEach(function(task) {

        let status = task.querySelector(".status");


        if (status.textContent === "Completed") {

            completed++;

        }
        else {

            pending++;

        }

    });


    document.getElementById("total-tasks").textContent =
        "Total Tasks: " + total;

    document.getElementById("completed-tasks").textContent =
        "Completed: " + completed;

    document.getElementById("pending-tasks").textContent =
        "Pending: " + pending;

}


});
