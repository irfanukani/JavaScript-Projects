var themeButton = document.getElementById("theme");

themeButton.addEventListener("click", () => {
  if (document.getElementById("main-col").classList.contains("bg-primary")) {
    document.getElementById("main-col").classList.remove("bg-primary");
    document.getElementById("main-col").style.color = "black";
    document.querySelector(".btn-primary").classList.remove("btn-light");
    document.querySelector(".d-flex").classList.add("bg-light");
    document.querySelector(".d-flex").classList.remove("bg-primary");
    document
      .querySelector(".btn-outline-primary")
      .classList.remove("btn-outline-light");
  } else {
    document.getElementById("main-col").classList.add("bg-primary");
    document.getElementById("main-col").style.color = "white";
    document.querySelector(".btn-primary").classList.add("btn-light");
    document
      .querySelector(".btn-outline-primary")
      .classList.add("btn-outline-light");
    document.querySelector(".d-flex").classList.remove("bg-light");
    document.querySelector(".d-flex").classList.add("bg-primary");
    document.querySelector(".p-4").classList.add("text-light");
  }
});
