var _targetElement = document.getElementById("target");

function AddTodo() {
  var todoText = document.getElementById("todo");

  var e = document.createElement("div");

  e.innerText = todoText.value;
  e.classList.add("todo");

  _targetElement.append(e);
}

function Reset() {
  _targetElement.remove();
  location.reload();
}
