let pendingList = document.getElementById("pendingList");
let completedList = document.getElementById("completedList");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = taskText;
        listItem.onclick = function () {
            moveTask(this);
        };
        pendingList.appendChild(listItem);
        taskInput.value = "";
    }
}

function moveTask(task) {
    if (task.parentElement === pendingList) {
        completedList.appendChild(task);
    } else {
        pendingList.appendChild(task);
    }
}

function deleteTask(task) {
    task.remove();
}
