window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("nav");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}


window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.opacity = 1;
  } else {
    backtop.style.opacity = 0;
  }
}





let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    // sadfjeg
    // this.firstElementChild.src = "images/light.svg";
  } else {
    // this.firstElementChild.src = "images/";
  }
  document.body.classList.toggle("dark");
});