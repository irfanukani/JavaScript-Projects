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
    var checkButton = document.getElementById("chk");
    const _data = {};
    _data.Algorithm = Selection.value;

    if (checkButton.checked) {
      _data.Array = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ];
    } else {
      var temp = [];

      temp = Data.value.split(" ");

      const Temp = temp.map((el) => {
        return parseInt(el);
      });

      _data.Array = Temp;
    }

    console.log(_data);
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
      Selection.classList.add("is-invalid");
    }

    if (checkButton.checked == false && Data.value == "") {
      Data.classList.add("is-invalid");
    } else {
      app.innerHTML = "";
      Data.classList.add("is-valid");
      const formData = UI.getData();

      UI.DisplayAlgorithm(formData);
    }
  }
}

document.getElementById("algoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  UI.checkSelection();
});
