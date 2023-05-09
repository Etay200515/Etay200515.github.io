window.onload = function () {
  const btn = document.getElementById("submit");
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    window.alert("Congrats!");
  });
};
