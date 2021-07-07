const qas = document.querySelectorAll(".title");

qas.forEach((clickedElement) => {
  clickedElement.addEventListener("click", function(){
    qas.forEach(element => {
      element.classList.remove("active");
    });
    clickedElement.classList.add("active");
  })
})
