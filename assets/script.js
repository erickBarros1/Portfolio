const btn = document.getElementById("btnTop");

btn.addEventListener('click', function() {
    window.scrollTo(0,0)
}) 

document.addEventListener('scroll', ocultarBtn,);

function ocultarBtn() {
    if(window.scrollY < 700) {
        btn.style.display = "none"
    } else {
        btn.style.display = "flex"
    }
};

