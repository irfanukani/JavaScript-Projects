//TASK CLASS
class Task {
  constructor(task, due) {
    this.task = task;
    this.due = due;
  }
}

//UI CLASS
class UI {
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#todo-form");
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static clearFields() {
    document.querySelector("#task").value = "";
    document.querySelector("#due").value = "";
  }

  static displayTasks() {
    const tasks = Store.getTasks();

    tasks.forEach((task) => {
      UI.addTasktoList(task);
    });
  }

  static addTasktoList(_task) {
    const list = document.querySelector("#todo-list");

    const row = document.createElement("tr");

    row.innerHTML = `<td>${_task.task}</td>
    <td>${_task.due}</td>
    <td><a href = '#' class = 'btn btn-danger btn-sm delete'>X</a></td>`;

    list.appendChild(row);
  }
}

//STORAGE CLASS
class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    return tasks;
  }
  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  static removeTask(mytask) {
    const tasks = Store.getTasks();

    tasks.forEach((element, index) => {
      if (element.task === mytask) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

//EVENT : Display Books

document.addEventListener("DOMContentLoaded", UI.displayTasks());

//EVENT : Add Book
document.querySelector("#todo-form").addEventListener("submit", (e) => {
  //GET DATA
  e.preventDefault();
  const _Task = document.querySelector("#task").value;
  const _due = document.querySelector("#due").value;

  if (_Task === "" || _due === "") {
    UI.showAlert("Please fill all fields", "danger");
  } else {
    const _task = new Task(_Task, _due);

    UI.addTasktoList(_task);
    Store.addTask(_task);
    UI.showAlert("Task Added Successfully", "success");
    UI.clearFields();
  }
});

//EVENT : REMOVE BOOK

document.querySelector("#todo-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  let due = e.target.parentElement.previousElementSibling;
  Store.removeTask(due.previousElementSibling.textContent);
  UI.showAlert("Task Deleted Successfully", "success");
});
