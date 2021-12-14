const card = document.querySelectorAll(".card__inner");

card.forEach((link) => {
  link.addEventListener("click", function (e) {
    this.classList.toggle("is-flipped");
  });
});
