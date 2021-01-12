/*
UI Class :
    -Add Green if valid Selection
    -Get data from form
    -make array of data
*/

class UI {
  static DisplayAlgorithm() {}

  static getData() {
    var Selection = document.getElementById("algo");
    var Data = document.getElementById("exampleTextarea");

    const _data = {};
    _data.Algorithm = Selection.value;
    _data.Array = Data.value;

    console.log("a");
    return _data;
  }

  static checkSelection() {
    var Selection = document.getElementById("algo");
    var Data = document.getElementById("exampleTextarea");
    var checkButton = document.getElementById("chk");
    var app = document.getElementById("app");

    if (Selection.value !== "check") {
      Selection.classList.add("is-valid");
    } else {
      return Selection.classList.add("is-invalid");
    }

    if (checkButton.checked == false && Data.value == "") {
      Data.classList.add("is-invalid");
    } else {
      app.innerHTML = "";

      const formData = UI.getData();

      UI.DisplayAlgorithm(formData);
    }
  }
}

document.getElementById("algoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  UI.checkSelection();
});
