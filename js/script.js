var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const burger = document.querySelector('.header__burger');
if (burger) {
    const menuNav = document.querySelector('.nav');
    burger.addEventListener("click", function (e) {
        burger.classList.toggle('_active');
        menuNav.classList.toggle('_active');
    });
}