/*
UI Class :
    -Add Green if valid Selection
    -Get data from form
    -make array of data
*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function DisplayBars(obj) {
  var app = document.getElementById("app");

  app.innerHTML = "";

  // console.log(obj.Array);

  let i;
  for (i = 0; i < obj.Array.length; i++) {
    let box = document.createElement("div");
    box.innerHTML = obj.Array[i];
    box.style.margin = "10px";
    box.classList.add("p-4");
    box.classList.add("border");
    box.classList.add("box");

    if (i == obj.e1) {
      box.classList.add("border-info");
      setTimeout(() => {
        box.classList.add("border-danger");
        box.classList.remove("border-info");
        box.innerHTML = obj.Array[obj.e2];
      }, 1000);
    }
    if (i == obj.e2) {
      box.classList.add("border-danger");
      setTimeout(() => {
        box.classList.add("border-info");
        box.classList.remove("border-danger");
        box.innerHTML = obj.Array[obj.e1];
      }, 1000);
    }
    app.appendChild(box);
  }
}

class UI {
  static DisplayAlgorithm(obj) {
    const Array = obj.Array;

    DisplayBars({
      Array: Array,
      e1: 1000,
      e2: 1000,
    });

    async function bubbleSort(inputArr) {
      let len = inputArr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (inputArr[j] > inputArr[j + 1]) {
            await DisplayBars({
              Array: inputArr,
              e1: j,
              e2: j + 1,
            });
            await sleep(3000);
            let tmp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = tmp;
          }
        }
      }
      alert("Array sorted :)");
      return inputArr;
    }
    setTimeout(bubbleSort(Array), 2000);
  }

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
    // console.log(_data);
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
